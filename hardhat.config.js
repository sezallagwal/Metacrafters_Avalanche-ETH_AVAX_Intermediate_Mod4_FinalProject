require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const ENABLE_FORK_FUJI = false;
const ENABLE_FORK_MAINNET = false;
let forkConfig = undefined;

if (ENABLE_FORK_MAINNET) {
  forkConfig = {
    url: "https://api.avax.network/ext/bc/C/rpc",
  };
} else if (ENABLE_FORK_FUJI) {
  forkConfig = {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  };
}

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gasPrice: 225e9, // 225 Gwei
      chainId: forkConfig ? undefined : 43112, // Use default chainId if not forking
      forking: forkConfig,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225e9, // 225 Gwei
      chainId: 43113,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};