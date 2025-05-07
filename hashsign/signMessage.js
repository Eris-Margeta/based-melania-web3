const { ethers } = require('ethers');

// Replace with your private key
const privateKey = '0x2222222222222222222222222222222222222222222222222222222';

const wallet = new ethers.Wallet(privateKey);

const message = '[basescan.org 25/06/2022 22:59:15] I, hereby verify that I am the owner/creator of the address [0xABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB]';

async function signMessage() {
  const signature = await wallet.signMessage(message);
  console.log('Signature Hash:', signature);
}

signMessage().catch(console.error);
