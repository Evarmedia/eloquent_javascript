import { connectWallet, getBalance, sendTransaction } from './ethereum.js';
import { showNotification, updateUI } from './ui.js';

let currentAccount = null;

async function init() {
    const connectButton = document.getElementById('connect-wallet-btn');
    const sendForm = document.getElementById('send-form');

    connectButton.addEventListener('click', handleConnect);
    sendForm.addEventListener('submit', handleSend);

    // Check if already connected
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', () => window.location.reload());
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                handleAccountsChanged(accounts);
            }
        } catch (error) {
            console.error('Error checking accounts:', error);
        }
    }
}

async function handleConnect() {
    try {
        currentAccount = await connectWallet();
        await updateWalletInfo();
        showNotification('Wallet connected successfully', 'success');
    } catch (error) {
        showNotification(error.message, 'error');
    }
}

async function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        currentAccount = null;
        updateUI({ address: null, balance: '0' });
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        await updateWalletInfo();
    }
}

async function updateWalletInfo() {
    if (!currentAccount) return;
    
    try {
        const balance = await getBalance(currentAccount);
        updateUI({ address: currentAccount, balance });
    } catch (error) {
        showNotification('Error fetching wallet info', 'error');
    }
}

async function handleSend(event) {
    event.preventDefault();
    
    if (!currentAccount) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }

    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    const sendButton = document.getElementById('send-button');

    try {
        sendButton.disabled = true;
        sendButton.textContent = 'Sending...';
        
        await sendTransaction(recipient, amount);
        showNotification('Transaction sent successfully', 'success');
        await updateWalletInfo();
        event.target.reset();
    } catch (error) {
        showNotification(error.message, 'error');
    } finally {
        sendButton.disabled = false;
        sendButton.textContent = 'Send ETH';
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);