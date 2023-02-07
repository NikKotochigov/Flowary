//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./StreamLogic.sol";

error Unauthorized();

 // ---------- PROBLEMS & TASKS--------------
// owner => director // Add roles?
// Shoud it be tru ProxY? Can we create new contract with proxy?
// Banc Control
// Refactor add employy & delete employee & modify employy

contract Company is StreamLogic {

    // ADD EVENTS
    event AddEmployee(address _who, uint _time);
    event StartFlow(address _who, uint _time);

    string public name;
    uint public totalAmountEmployee;

    constructor (string memory _name){
        name = _name;
    }

    struct Employee{
        address who;
        uint256 flowRate; // 1 token / sec
        bool worker;
        //bool what kind of sallary he s going to get >>> h/$ or $/mounth
    }
    mapping(address => Employee) public allEmployee;

    modifier employeeExists(address _who){
            require(allEmployee[_who].worker, "This employee doesnt exist or deleted already");
            _;
    }

    // ------------------- MAIN FUNC ----------------

    function addEmployee(address _who, uint256 _rate) external {

           Employee memory newEmployee = Employee({
			who: _who,
			flowRate: _rate,
			worker: true
		});

		allEmployee[_who] = newEmployee;

        totalAmountEmployee++;

        emit AddEmployee(_who, block.timestamp);
    }

    function modifyRate(address _who, uint256 _rate) external employeeExists(_who){

        allEmployee[_who].flowRate = _rate;
    }

    function deleteEmployee(address _who) external employeeExists(_who) {
        // ADD arr funcs from StreamLogic -> delete employee from mapping
        delete allEmployee[_who];
    }



//-------------------- SECURITY --------------
// Set up all restrictoins tru DAO???

    // Solution #1 (restriction on each stream)
    uint public tokenLimitMaxHoursPerPerson = 20 hours; // Max amount hours of each stream with enough funds;

    function validToStream(address _who)public view returns(bool){
         return (allEmployee[_who].flowRate * tokenLimitMaxHoursPerPerson ) >= balanceContract();
    }

   
    // Solution #2 (restriction on all live stream)
    // 1000$ TB => active stream++ | ar++ => cant create stream if not enough
     uint public tokenLimitMaxHoursAllStream = 10 hours;
    function validToStreamAll()public view returns(bool){
        // FORMULA =>      tas * ar >= TL
        // tas = total amount of active stream
        // ar = avarage rate  ??? How to count (create new var) uint ar -> canculate each time when we add new employee
        // TL = tokenLimitMaxHoursAllStream | set up by company? Decided by DAO? Immutable by default
    }

    // Solution #3 (restriction to add new employee)
     uint public hoursLimitToAddNewEmployee = 100 hours;
     function valitToAdd()public view returns(bool){
        // FORMULA =>      tae * ar * TL >= balanceOf(this)
        // tae = total amount of all employee
        // ar = avarage rate (look above)
        // HL = hours limit

        //PS "If company doesnt have enought tokens to pay all employee for next 100 hours they can add new employee"
     }

     //---- ADD BUFFER ---------
     // rate / time /  money


// -------------- FUNCS with EMPLOYEEs ----------------
    //@dev Starts streaming token to employee
    function start(address _who) public employeeExists(_who){
        // put restriction
        startStream(_who, allEmployee[_who].flowRate);
    }

    function finish(address _who) public employeeExists(_who){
        uint256 salary = finishStream(_who);
        // if(!overWroked){
        //     function ifyouEmployDolboeb()
        // }
        token.transfer(_who, salary);
    }



    function withdrawEployee()public{
        // FUCS abour streaming within existing stream
    }
// Decimals = 6 | 1 USDC = 1_000_000 tokens
    function getDecimals()public view returns(uint){
        return token.decimals();
    }

    receive() external payable { }
    fallback() external payable { }

}