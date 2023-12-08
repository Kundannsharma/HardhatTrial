// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Token {
    string public name = "Hardhat Token";
    string public symbol = "HHT";
    uint public totalSupply = 10000;

    address public owner;
    mapping(address => uint) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount, "Not enough amount"); //checking the bal of sender who is transfering
        balances[msg.sender] -= amount; //balances[masg.sender]=balances[msg.sender]-amount
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}

//0xFC0F868637AeC49cED5eD777f96AAEf3072048F9    CA