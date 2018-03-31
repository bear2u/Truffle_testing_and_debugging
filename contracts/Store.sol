pragma solidity ^0.4.17;

contract SimpleStorage {
    uint myVariable;

    function set(uint x) public {
        myVariable = x;
    }

    // function set(uint x) public {
    //     assert(x == 0); //0일 경우에만 통과를 하도록 한다. 
    //     myVariable = x;
    // }

    function get() constant public returns (uint) {
        return myVariable;
    }
}