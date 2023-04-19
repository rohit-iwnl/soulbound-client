contract UniversityDegree is ERC721URIStorage  {

    address owner;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("SomeNFT", "CoolNFT") {
        owner = msg.sender;
    }

    mapping(address => string) public personToDegree;

    function claimDegree(string memory tokenURI)
        public
        returns (uint256)
    {
        require(issuedDegrees[msg.sender], "Degree is not issued");

        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        personToDegree[msg.sender] = tokenURI;
        issuedDegrees[msg.sender] = false;

        return newItemId;
    }

    function checkDegreeOfPerson(address person) external view returns (string memory) {
        return personToDegree[person];
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    mapping(address => bool) public issuedDegrees;

    function issueDegree(address to) public {
        issuedDegrees[to] = true;
    }
}