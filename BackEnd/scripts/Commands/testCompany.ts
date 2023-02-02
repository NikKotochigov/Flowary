import { ethers } from "hardhat";

// npx hardhat run scripts/deployCompay.ts
// npx hardhat run scripts/Commands/testCompany.ts

async function main() {
  console.log("Starting 🏃")

  const accounts = await ethers.provider.listAccounts();
  console.log("First ACC: ", accounts[0]);



  const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const contract = await ethers.getContractAt("Company", address);
  // const Contract = await ethers.getContractFactory('Company');
  // const contract = Contract.attach(address)

  try {
    const demo = await contract.totalAmountEmployee();
    console.log("📄 Name", demo) 
    
  } catch (error) {
    console.log(error)
  }
  console.log(`🏁 DONE`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});