const Loan = artifacts.require("Loan");

contract("Loan", accounts => {
    let instance;

    beforeEach(async () => {
        instance = await Loan.new("1000", "20-10-2018", "20-10-2038", { from: accounts[0] });
    });

    it("check if Loan is deployed", async () => {
        assert.ok(instance);
    });

    it("should loan value be 1000", async () => {
        const value = await instance.loanInfo();
        assert.equal(value[0].c[0], 1000);
    })

    it("should loan startDate be 20-10-2018", async () => {
        const value = await instance.loanInfo();
        assert.equal(value[1], '20-10-2018');
    })

    it("should loan value be null", async () => {
        const value = await instance.loanInfo();
        assert.equal(value[2], '20-10-2038');
    })
});