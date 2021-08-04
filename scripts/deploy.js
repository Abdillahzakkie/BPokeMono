const hre = require("hardhat");

async function main() {
	const IterableMapping = await hre.ethers.getContractFactory(
		"IterableMapping"
	);
	const _IterableMapping = await IterableMapping.deploy();

	const BABYPOKEMON = await hre.ethers.getContractFactory("BABYPOKEMON", {
		libraries: {
			IterableMapping: _IterableMapping.address,
		},
	});

	const bABYPOKEMON = await BABYPOKEMON.deploy();

	console.log(`Library deployed at: ${_IterableMapping.address}`);
	console.log(`Contract deployed at: ${bABYPOKEMON.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
