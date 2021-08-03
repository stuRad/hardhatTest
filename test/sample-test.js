const { assert } = require("chai");

describe("Tripler", function () {
  it("Should triple init value of 5", async function () {
    const Tripler = await ethers.getContractFactory("Tripler");
    const test = await Tripler.deploy();
    await test.deployed();

    //assert.equal(await test.x(), 5);

    await test.triple();

    assert.equal(await test.x(), 15);

  });
});
