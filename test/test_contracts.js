var SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", function(accounts) {
  it("should value is 0", function() {
    SimpleStorage.deployed()
      .then(function(instance) {
        return instance.get.call();
      })
      .then(function(value) {
        assert.equal(value, 0, "value is 0");
      })
      .catch(e => {
        console.log(e);
      });
  });
  it("should value is 4 when i put the 4 about value", async () => {
    try {
      let instance = await SimpleStorage.deployed();
      await instance.set(4);

      let instance2 = await SimpleStorage.deployed();
      let value = await instance2.get.call();
      assert.equal(value, 4, "value is 4");
    } catch (e) {
      console.log(e);
    }
  });
});
