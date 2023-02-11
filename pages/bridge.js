import { useState, useEffect } from "react";
// import contract from "../contracts/erc20";
import provider from "../contracts/provider";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import conectSigner from "../contracts/SIGNER";
import { Box, Divider } from "@mui/material";
// import getCompanyContract from "../contracts/erc20";
import connectContract from "../contracts/erc20";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { contractSelector } from "../src/store/reducers/contract/reducer";


// export async function getServerSideProps(context) {
//    const admin = await contract.administrator()
//     const bal = await contract.balanceContract();
//     const balance = ethers.utils.formatUnits( bal, 18 )
//     const companyName = await contract.name()
//     console.log(balance);
//     // const balanceCWT = await contract.totalSupply();
//     // const num = balanceCWT.toString();
//     // console.log(num);
//     // const name = await contract.name()
//     // console.log(name);
//     return {
//       props: {admin, balance, companyName},
//     }}

const Page = () => {
  const [currentAcount, setCurrentAccount] = useState();
  const [add, setAdd] = useState('');
  const [addTwo, setAddTwo] = useState(0);
  const [result, setResult] = useState()
  const [resultTwo, setResultTwo] = useState()
  const [resultThree, setResultThree] = useState()
  const {admin} = useSelector(contractSelector)

  // const [balance, setBalance] = useState();

  // async function logIn() {
  //   const address = (await provider.send("eth_requestAccounts", []))[0];
  //   console.log(address);
  //   setCurrentAccount(address);
  // }

  // function logOut() {
  //   setCurrentAccount("");
  // }

  // const handleSetApproverClick = async () => {
  //   const signer = provider.getSigner();
  //   const approvePiggyBankWithSigner = contractERC20.connect(signer);
  //   try {
  //       const tx = await approvePiggyBankWithSigner.setApprover();
  //       console.log("tx: ", tx);
  //       const resoponse = await tx.wait();
  //       console.log("resoponse: ", resoponse);
  //       router.reload();
  //   } catch (error) {
  //       console.error(error);
  //   }}
  const router = useRouter();
   //   router.push({
    //   query: {addressCompanyContract: e},
    // });
  const dispatch = useDispatch();
  const handleConnectCompany = async () => {
    connectContract(add, dispatch)
  };

 //******CREATE NEW EMPLOYEE ON THE COMPANY CONTRACT *******/
  const handleCreateEmployee = async () => {
    try {
      const contractCreateEmplWithSigner = conectSigner(contract)
        const create = await contractCreateEmplWithSigner.addEmployee(add, addTwo)
        const res = await create.wait()
        console.log(res.events)

      //  setResult(`✅ Complete! You just bought ${amountBuy} CWT`)
      setResultTwo(res.transactionHash.toString())
    }
    catch(error){
      console.log(error)
    }
  };

  const handleCheckEmployee = async () => {
    try {
        const check = await contract.allEmployee(add)
        // const res = await check.wait()
        setResult(check[1].toString())
        console.log({check})

      //  setResult(`✅ Complete! You just bought ${amountBuy} CWT`)

    }
    catch(error){
      console.log(error)
    }
  };

  const handleChangeRate = async () => {
    try {
      const contractChangeRate = conectSigner(contract)
      const change = await contractChangeRate.modifyRate(add, addTwo)

     const res = await change.wait()
        setResultThree(res.toString())
        console.log({res})
    }
    catch(error){
      console.log(error)
    }
  };

  return (
    <div style={{ textAlign: "center" }}>

      <div>
 <p>Company exist</p>
        <input
              placeholder="Enter address of company contract"
              value={add}
              onChange={(event) => setAdd(event.target.value)}
              className="inpt"
            />
              <button
                onClick={handleConnectCompany}
                className="p-20 ml-3 h-7"
              >
                Check
              </button>

        <p>Admin: {admin}</p>
        {/* <p>Balance: {balance}</p>
        <p>Company name: {companyName}</p><br /> */}
        
        <input
              placeholder="Enter address of employee wallett"
              value={add}
              onChange={(event) => setAdd(event.target.value)}
              className="inpt"
            />
             <input
              placeholder="Enter rate"
              value={addTwo}
              onChange={(event) => setAddTwo(event.target.value)}
              className="inpt"
            />
        <button
                onClick={handleCreateEmployee}
                className="p-20 ml-3 h-7"
              >
                Create new Employee
              </button>
              <p>Result: {resultTwo}</p>
             <Box sx={{m:5}} />
              
              <input
              placeholder="check employee"
              value={add}
              onChange={(event) => setAdd(event.target.value)}
              className="inpt"
            />
 <button
                onClick={handleCheckEmployee}
                className="p-20 ml-3 h-7"
              >
                check new Employee
              </button>
            <p>Are you employee: {result}</p>
            <Box sx={{m:5}} />

            <input
              placeholder="Enter address of employee wallett"
              value={add}
              onChange={(event) => setAdd(event.target.value)}
              className="inpt"
            />
             <input
              placeholder="Enter NEW rate"
              value={addTwo}
              onChange={(event) => setAddTwo(event.target.value)}
              className="inpt"
            />
        <button
                onClick={handleChangeRate}
                className="p-20 ml-3 h-7"
              >
                Change rate
              </button>
              <p>Result: {resultThree}</p>
        {/* <p>Balance: {balance}</p>
        <p>Name: {name}</p>
        <p>Supply: {num}</p> */}
      </div>
      {/* <button onClick={handleSetApproverClick}>Set Approver</button> */}
    </div>
  );
};

export default Page;

