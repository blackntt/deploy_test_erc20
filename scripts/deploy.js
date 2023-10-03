const fs = require("fs");
async function deployContracts() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const ERC20Test = await ethers.deployContract("ERC20Test", ["BTest", "Test"]);
  await ERC20Test.waitForDeployment();
  console.log("Deployed contracts with ERC20Test:", ERC20Test.target);
}

deployContracts()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
