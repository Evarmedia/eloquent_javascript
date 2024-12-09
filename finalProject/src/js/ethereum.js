import { BrowserProvider, formatEther, parseEther } from 'ethers';

export async function connectWallet() {
    if (!window.ethereum) {
        throw new Error('Please install MetaMask to use this application');
    }

    const provider = new BrowserProvider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    return accounts[0];
}

export async function getBalance(address) {
    if (!window.ethereum) return '0';
    
    const provider = new BrowserProvider(window.ethereum);
    const balance = await provider.getBalance(address);
    return formatEther(balance);
}

export async function sendTransaction(to, amount) {
    if (!window.ethereum) throw new Error('MetaMask is not installed');

    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    const tx = await signer.sendTransaction({
        to,
        value: parseEther(amount)
    });
    
    await tx.wait();
}