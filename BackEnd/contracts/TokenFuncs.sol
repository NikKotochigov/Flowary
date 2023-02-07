//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract TokenFuncs {

    ERC20 public token;

    address owner;

    function setToken(address _token) public {
        token = ERC20(_token);
    }

    function balanceContract()public view returns(uint){
        return token.balanceOf(address(this));
    }
    function withdrawTokens()external {
        //add lot restritions
        token.transfer(owner, balanceContract());
    }
}
