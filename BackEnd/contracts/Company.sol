//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/access/Ownable.sol";
import {
    ISuperfluid, 
    ISuperToken, 
    ISuperApp
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

error Unauthorized();
// owner => director // Add roles?

contract Company is Ownable {

    // ADD EVENTS

    string public name;
    uint public totalAmountEmployee;

    constructor (string memory _name){
        name = _name;
        totalAmountEmployee = 1;
    }

    struct Employee{
        address who;
        int96 flowRate;
        bool worker;
        //bool what kind of sallary he s going to get >>> h/$ or $/mounth
    }
    mapping(address=>Employee) public allEmployee;

    function addEmployee(address _who, int96 _rate) external onlyOwner {
        Employee storage newEmployee = allEmployee[_who];
        newEmployee.who = _who;
        newEmployee.flowRate = _rate;
    }

    // FUNC >> DELETE EMPLOYEE

    // FUNC >>  changeRate();

// ----------- SUPERFLUID FUNCS ----------------

// (1) RECIVE SUPER TOKEN FROM SOMEONE

    using SuperTokenV1Library for ISuperToken;

    ISuperToken public token;

    function setSuperToken(address _token) public onlyOwner{
        token = ISuperToken(_token);
    }

    function balanceContract()public view returns(uint){
        return token.balanceOf(address(this));
    }


    function sendLumpSumToContract(uint256 amount) external onlyOwner{
        token.transferFrom(msg.sender, address(this), amount);
    }
// FUNCS FOR EMPLOYEE
    function _createFlowFromContract(address receiver, int96 flowRate) private {
        token.createFlow(receiver, flowRate);
    }

    function _deleteFlowFromContract(address receiver) private {
        token.deleteFlow(address(this), receiver);
    }


// ----------- PAYMENT ----------------
    function startFlow()external{
        require(allEmployee[msg.sender].worker, "Ops, you do not work here! Or we forgot to add you");
        _createFlowFromContract(msg.sender, allEmployee[msg.sender].flowRate);
    }

    function finishFlow()external{
        require(allEmployee[msg.sender].worker, "Ops, you do not work here! Or we forgot to add you");
        _deleteFlowFromContract(msg.sender);
    }


    receive() external payable { }
    fallback() external payable { }

}