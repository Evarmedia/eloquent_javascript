export function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification show ${type}`;

    setTimeout(() => {
        notification.className = 'notification';
    }, 3000);
}

export function updateUI({ address, balance }) {
    const connectButton = document.getElementById('connect-wallet-btn');
    const walletInfo = document.getElementById('wallet-info');
    const sendSection = document.getElementById('send-section');
    const walletAddress = document.getElementById('wallet-address');
    const balanceDisplay = document.getElementById('balance-display');

    if (address) {
        connectButton.textContent = 'Connected';
        connectButton.disabled = true;
        walletInfo.classList.remove('hidden');
        sendSection.classList.remove('hidden');
        walletAddress.textContent = `${address.slice(0, 6)}...${address.slice(-4)}`;
        balanceDisplay.textContent = `${Number(balance).toFixed(4)} ETH`;
    } else {
        connectButton.textContent = 'Connect MetaMask';
        connectButton.disabled = false;
        walletInfo.classList.add('hidden');
        sendSection.classList.add('hidden');
        walletAddress.textContent = 'Not Connected';
        balanceDisplay.textContent = '0 ETH';
    }
}