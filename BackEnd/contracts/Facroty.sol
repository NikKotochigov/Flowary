//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.14;

import { Company } from "./Company.sol";

// ----------------- Main -----------------
contract registrateOrganization {
    event Creation(address _org, address _creator, string _what);
    
    uint public totalAmounOfOrganization;
    address[] public listOfOrg;

//Pay smth to create Company??

    function createCompany(string memory _name) external {
        address newOrg = address(new Company(_name));
        listOfOrg.push(newOrg);
        totalAmounOfOrganization++;

        emit Creation(newOrg, msg.sender, _name);    
    }
}