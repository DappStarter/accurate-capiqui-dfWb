require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain history idea entire front squeeze'; 
let testAccounts = [
"0x7c435b521ccb2fcf02ebf9257bd8543376978eea2390569cb74c3cdef3aacc48",
"0x7e82d2ddc6fa0169e7aa97612a674d1d79052ca508db5ab8f659f1595d3faccf",
"0x533c5fd8064144211565ec0464f7699e44b8c6c2f563d2f879b15654dc5c4c65",
"0x0b028d822f4872b5847cab821c188e846e33f2e8f95e09254ad4bd2527a46e84",
"0x4602f07daf2ea3726131c4f16adea55c136b8a93a1c0bd0026fcf1665920a605",
"0x48ea54eb6144935669b038574eb1a2c316e7e70ffdec09473726dfb7b3fc4741",
"0x29985ab3b86e58dc36ef10efd2400a64d3ebfdda33a22ff7a1b842def2136fd7",
"0x43b19db726f1ce66fa5a05ff1951738d4add474efc3e047e0764a568d5d40259",
"0x2ba71868a87daba7b597b5d7a6fd6afd197ee44f735e14402322fb27dcac1651",
"0x6adaef4243bcfdd8a34c65f319371d31ad0505e48d5d26b8f46e2bc8f703d01e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

