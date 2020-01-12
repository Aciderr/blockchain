const System = artifacts.require("System");

contract("System", accounts => {
    let instance;

    beforeEach(async () => {
        instance = await System.new({ from: accounts[0] });
    });

    it("check if System is deployed", async () => {
        assert.ok(instance);
    });

    it("should has 0 clients", async () => {
        const clients = await instance.getClients();
        assert.equal(clients.length, 0);
    })

    it("should create client", async () => {
        await instance.createClient("John Rambo");
        const clients = await instance.getClients();
        assert.equal(clients.length, 1);
    })
});