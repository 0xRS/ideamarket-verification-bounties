//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

contract IdeaTokenExchange {
    mapping(address => address) _tokenOwner;

    function setTokenOwner(address token, address owner) external {
        address current = _tokenOwner[token];
        require(current == address(0) || current == msg.sender);
        _tokenOwner[token] = owner;
    }

    function getTokenOwner(address token) public view returns (address){
        return _tokenOwner[token];
    }
}
