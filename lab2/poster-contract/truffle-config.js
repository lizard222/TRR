const HDWalletProvider = require('@truffle/hdwallet-provider');
// create a file at the root of your project and name it .env -- there you can set process variables
// like the mnemomic and Infura project key below. Note: .env is ignored by git to keep your private information safe
require('dotenv').config();
const mnemonic = "few object logic almost repeat oppose error buddy ginger off exotic below";
const infuraProjectId = process.env["INFURA_PROJECT_ID"];

module.exports = {

  /**
  * contracts_build_directory tells Truffle where to store compiled contracts
  */
  contracts_build_directory: './build/contracts',

  /**
  * contracts_directory tells Truffle where the contracts you want to compile are located
  */
  contracts_directory: './contracts',


  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    //polygon Infura mainnet
    polygon_matic: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl:
         "https://polygon-mainnet.infura.io/v3/" + infuraProjectId
      }),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 137
    },
    //polygon Infura testnet
     
    polygon_mumbai: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl:
         "https://polygon-amoy.blockpi.network/v1/rpc/public"
      }),
      network_id: 80002,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 80002
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
    }
  },
  db: {
    enabled: true
  },

  plugins: ['truffle-plugin-verify'],
  api_keys: {
    polygonscan: '4VZA2DEPNHVXI3CKMWHKRCM8B2XEDRIB65'
  }
}
