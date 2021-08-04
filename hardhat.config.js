require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv/config");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	networks: {
		rinkeby: {
			url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.alchemyApiKey}`,
			accounts: [process.env.PRIVATE_KEY],
			gas: 2100000,
			gasPrice: 8000000000,
		},
		bsc: {
			url: `https://bsc-dataseed1.ninicoin.io/`,
			// url: "https://bsc-dataseed.binance.org/",
			accounts: [process.env.PRIVATE_KEY],
			gas: 3100000,
			gasPrice: 8000000000,
		},
		bscTestnet: {
			url: `https://speedy-nodes-nyc.moralis.io/225d3aa06df7d2f1c351e260/bsc/testnet`,
			accounts: [process.env.PRIVATE_KEY],
			gas: 2100000,
			gasPrice: 8000000000,
		},
	},
	solidity: {
		compilers: [{ version: "0.6.12" }, { version: "0.6.2" }],
		settings: {
			optimizer: {
				enabled: true,
				runs: 1000,
			},
		},
	},
	etherscan: {
		apiKey: process.env.apiKey,
	},
};
