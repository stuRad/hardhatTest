//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Tripler {
  uint public x;

  constructor() {
      x = 5;
    }

  function triple() external {
    x = x * 3;
  }
}
