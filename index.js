const { Web3 } = require('web3');
const fs = require('fs');

const infuraApiKey = '3431dd7717e346feb44b92f3ae076938';
const web3 = new Web3(`https://sepolia.infura.io/v3/3431dd7717e346feb44b92f3ae076938`, { timeout: 60000 });
const contractAddress = '0xc8f570E1723c431789581Cd8c4758f2b77382591';

const abiFilePath = 'ABI.json';
const abiRawData = fs.readFileSync(abiFilePath);
const abi = JSON.parse(abiRawData);

const contract = new web3.eth.Contract(abi, contractAddress);

const userAddress = '0x7204C2191C322E8c448C029114b66dD19A292FfB';

contract.methods.balanceOf(userAddress).call()
.then(balance => {
        console.log(`Balance of ${userAddress}: ${balance} tokens`);
    })
    .catch(error => {
        console.error('Error checking balance:', error);
    });