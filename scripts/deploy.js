const { ethers } = require("hardhat");


const main = async () => {
  const [deployer] = await ethers.getSigners();

  // Deploy the contract
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  // Wait for the contract to be mined
  await token.deployed();

  // Print contract address
  console.log("Token deployed to:", token.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
