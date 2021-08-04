yarn install

clear && yarn hardhat run scripts/deploy.js --network bsc

<!-- Change the address in the libraries.js file to use IterableMapping deployed address -->

yarn hardhat verify --network bsc DEPLOYED_CONTRACT_ADDRESS --libraries libraries.js
