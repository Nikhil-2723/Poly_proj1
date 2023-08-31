const hre = require("hardhat");


async function main() {
  const lock = await hre.ethers.deployContract("NikhilNFT");

  await lock.waitForDeployment();

  const targetAddress = lock.target;
  console.log(`Deployed to ${targetAddress}`);

  // Write the targetAddress to .env file
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
