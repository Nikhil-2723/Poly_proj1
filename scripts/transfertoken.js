const hre = require("hardhat");
const NikhilNFTJSON = require("../artifacts/contracts/NikhilNFT.sol/NikhilNFT.json");

const contract_address = "0x616E9ed7E928fc95E68555bB94809e178D6C3AA9"; // Replace with the actual contract address
const NikhilNFTABI = NikhilNFTJSON.abi;
const walletAddress = "0x3Fc5fb342Aec4773ce3C4FB70FC357f22E2c1dE1"; // Replace with your wallet address

const fxRootContractABI = require("../fxRootContractABI.json");
const fxERC1155RootAddress = "0x883805323E06f7BFf1C8Df676acD592493820059"; // Replace with actual address

async function main() {
    const NikhilNFTContract = await hre.ethers.getContractAt(NikhilNFTABI, contract_address);

    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC1155RootAddress);

    const approveTx = await NikhilNFTContract.setApprovalForAll(fxERC1155RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");

    const tokenIds = await NikhilNFTContract.getAllNFTs();
     
    for (const tokenId of tokenIds) {
        const depositTx = await fxContract.deposit(
            contract_address,     // ERC1155 contract address
            walletAddress,        // Receiver address on Fantom
            tokenId,              // Token ID from NikhilNFT
            1,                    // Amount of tokens to deposit
            '0x6566'              // Data
        );
        await depositTx.wait();
        console.log(`Token ${tokenId} deposited`);
    }

    console.log("Your 5 tokens deposited successfully");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
