// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NikhilNFT is ERC1155, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256[] public allNFTs;

    string[] private NFTURIs = [
        "ipfs://bafkreibtstdxqcqomfnpfkgn7i7shfkxyqdu7yy2gpkzczoc7y633btyxi",
        "ipfs://bafkreifnpuwgjbwatiixixviwzl4rtnb5wyatptmric5u7ic2baa23laom",
        "ipfs://bafkreifz6gddp3m64vrmipph3bdvwk3kraeeqriqhyra4yvucqr3vigaze",
        "ipfs://bafkreifzisyx34nbgrqeg64je3juge35stmpwxzuxizmednatvrmqa3kl4",
        "ipfs://bafkreiduii56vjiqw4pnikfzohdfyxlifrkqulpy5koop35nnh2j5jpn5i"
    ];

    string[] public MetaNames = [
        "Cat",
        "Dog",
        "Elephant",
        "Lion",
        "Tiger"
    ];

    constructor() ERC1155("") {}

    function mintNikhilNFT(address recipient, uint256 amount) public onlyOwner {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        allNFTs.push(tokenId);
        _mint(recipient, tokenId, amount, "");
    }

    function _burn(address account, uint256 tokenId, uint256 amount) internal override {
        super._burn(account, tokenId, amount);
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return NFTURIs[tokenId % NFTURIs.length];
    }

    function getAllNFTs() public view returns (uint256[] memory) {
        return allNFTs;
    }

    function promptDescription(uint256 tokenId) external view returns (string memory) {
        require(tokenId < MetaNames.length, "Token ID does not exist");
        return MetaNames[tokenId];
    }
}
