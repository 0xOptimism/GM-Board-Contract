const hre = require("hardhat");

const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.001"),
  });

  await waveContract.deployed();

  const vrfV2Consumer = await hre.ethers.getContractFactory("VRFv2Consumer");
  const vrfContract = await vrfV2Consumer.deploy(2);

  await vrfContract.deployed();
  
  console.log("Chainlink address: ", vrfContract.address);
  console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
