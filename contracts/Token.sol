// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name = "Hardhat Token";
    string public symbol = "HHT";
    uint256 public totalSupply = 10000;

    address public owner;

    mapping(address => uint256) balanceOf;

    constructor(){
        balanceOf[msg.sender] = totalSupply;
        owner= msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(balanceOf[msg.sender] >= amount,"Not Enough Balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }

    function balanceOfAdd(address account) public view returns(uint256){
        return balanceOf[account];
    }
}