const { ethers } = require("ethers");

async function createAmoyWallet() {
    const rpcUrl = "https://rpc-amoy.polygon.technology/";
    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const wallet = ethers.Wallet.createRandom().connect(provider);

    console.log("Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);
}

createAmoyWallet();
