require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["9332c0dbbff005cfbb1f4bda3e8c7be3eadb41240124f3fc4d93dc7dd37969c2"],
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/nyHyzW8RbkwSKnszaYmdcV-UAjmRa9AH',
      accounts: ["9332c0dbbff005cfbb1f4bda3e8c7be3eadb41240124f3fc4d93dc7dd37969c2"],
      gasPrice: 100
    },
  },
};
