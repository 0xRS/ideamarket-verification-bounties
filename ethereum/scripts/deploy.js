const hre = require("hardhat");

async function main() {
    [owner, addr1, ...addrs] = await ethers.getSigners();
    const DAI = await hre.ethers.getContractFactory("DAI");
    const dai = await DAI.deploy("DAI", "DAI");
    await dai.deployed();

    const IdeaTokenExchange = await hre.ethers.getContractFactory("IdeaTokenExchange");
    const ite = await IdeaTokenExchange.deploy();
    await ite.deployed();

    const VerificationBounty = await hre.ethers.getContractFactory("VerificationBounty");
    const vb = await VerificationBounty.deploy(30*24*60*60, dai.address, ite.address);
    await vb.deployed();

    console.log(dai.address);
    console.log(ite.address);
    console.log(vb.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
