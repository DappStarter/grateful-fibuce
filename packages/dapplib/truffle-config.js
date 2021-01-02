require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remain snake give prison sun genre'; 
let testAccounts = [
"0x1783c9cd89bfbc98a6c8cff2a07e2c8bd2a39bb34fb312f30b574b223717463f",
"0x24b3629220cf6a272b8a78d0fd135a68cd86b7128928d308da2bbc332ceda025",
"0x2561e95e4083cdab565a435037f86166169cc32efd529a47bfd1733854c9bd09",
"0xb7320a9423c67e20ef3d86d761d0419c86a02d759e520261b2f2e29871870b8e",
"0x0405108869cd90f8e3a622c44c07b1babb40b22d5aca3ddaca5d07c06c85df6d",
"0x9d4a9a37ba5ae2cee04f50dfd6733194fab0b12b2075d91185175e29997d2b03",
"0x31045e181611ee7a693840315139b9c63f3382de20a06a0ac63dbbe6fefa2236",
"0x5c80f01a141047f6e397a516421c3e6f0320a74f9293c3e54deb2e2658231f96",
"0x8e09bf778e44dcccaf9e8046eff12083835a3bd906f5393d95f9d12729e018d7",
"0x51f06643a0e91285fbbb9366220fb3fe18cc3eb1384396f6b62b9bd6df7abd16"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
