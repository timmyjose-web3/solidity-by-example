//SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

contract Counter {
    uint256 public count;

    function get() external view returns (uint256) {
        return count;
    }

    function set(uint256 newCount) external {
        count = newCount;
    }

    function inc() external {
        count += 1;
    }
}
