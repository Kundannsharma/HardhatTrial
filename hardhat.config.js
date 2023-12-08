// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");

// module.exports = {
//   solidity: "0.8.19",
//   networks: {
//     hardhat: {
//       chainId: 1337, // The chainId for the local Hardhat Network
//     },
//   },
// };

require("@nomiclabs/hardhat-waffle");
// require('dotenv').config();

const INFURA_API_KEY = ""; // Replace with your Infura API key
const PRIVATE_KEY =
  ""; // Replace with your private key (without '0x' prefix) https://sepolia.infura.io/v3/

// console.log("API_KEY:", INFURA_API_KEY);
// console.log("PRIVATE_KEY:", PRIVATE_KEY);

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
};
