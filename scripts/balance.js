const hre = require("hardhat");
const NikhilNFTContractJSON = require("../artifacts/contracts/NikhilNFT.sol/NikhilNFT.json");

const contract_address = "0xf5D0F69Cd9888030dcc2De05fA99dBaa0fCFeF31"; // Replace with the actual contract address
const NikhilNFTABI = NikhilNFTContractJSON.abi;
const walletAddress = "0x3Fc5fb342Aec4773ce3C4FB70FC357f22E2c1dE1"; // Replace with your wallet address

async function main() {
    const NikhilNFTContract = await hre.ethers.getContractAt(NikhilNFTABI, contract_address);

    const tokenIds = [1, 2, 3 , 4 , 5]; 
	let Balance = 0;
    const balances = await Promise.all(
        tokenIds.map(async (tokenId) => {
            return (await NikhilNFTContract.balanceOf(walletAddress, tokenId)).toString();
        })
    );

    for (let i = 0; i < tokenIds.length; i++) {
        console.log(`Token ${tokenIds[i]} balance: ${balances[i]}`);
		Balance++;

    }
	console.log("Your Polygon have " + Balance +" token balance ")

	
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
