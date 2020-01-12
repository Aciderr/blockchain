const Client = artifacts.require("Client");

contract("Client", accounts => {
    let instance;

    beforeEach(async () => {
        instance = await Client.new('John Rambo', { from: accounts[0] });
    });

    it("should deploy contract", async () => {
        assert.ok(instance);
    });

    it("should has name John Rambo", async () => {
        const name = await instance.name();
        assert.equal(name, 'John Rambo');
    })

    it("should has 0 loans", async () => {
        const loans = await instance.getLoans();
        assert.equal(loans.length, 0);
    })

    it("should create loan", async () => {
        await instance.createLoan("1000", "20-10-2018", "null");
        const loans = await instance.getLoans();
        assert.equal(loans.length, 1);
    })
});