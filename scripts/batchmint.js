const hre = require("hardhat");
const NikhilNFTContractJSON = require("../artifacts/contracts/NikhilNFT.sol/NikhilNFT.json");

const contract_address = "0x616E9ed7E928fc95E68555bB94809e178D6C3AA9"; // Replace with the actual contract address
const NikhilNFTABI = NikhilNFTContractJSON.abi;
const walletAddress = "0x3Fc5fb342Aec4773ce3C4FB70FC357f22E2c1dE1"; // Replace with your wallet address

async function main() {
    const NikhilNFTContract = await hre.ethers.getContractAt(NikhilNFTABI, contract_address);
    
    let tokenmint = 0;

    for (let i = 0; i < 5; i++) {
        try {
            const tx = await NikhilNFTContract.mintNikhilNFT(walletAddress, 1); // Mint 1 token
            await tx.wait();

            tokenmint++;
            
        } catch (error) {
            console.error("Error minting token:", error.message);
        }
    }

    console.log("You have minted:"+ tokenmint + "tokens");

    const tokenIds = await NikhilNFTContract.getAllNFTs();
	let Balance = 0;

    for (const tokenId of tokenIds) {
         await NikhilNFTContract.balanceOf(walletAddress, tokenId);
        Balance++;
    }
	console.log("You have  :" +  Balance  + "tokens");

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
