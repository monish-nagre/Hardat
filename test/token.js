import { expect } from "chai";

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();
        console.log("Signers object:", owner);

        const Token = await ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOfAdd(owner.address);
        console.log("Owner Address:", owner.address);

        expect((await hardhatToken.totalSupply()).toString()).to.equal(ownerBalance.toString());
    });

    it("Should transfer tokens between accounts", async function () {
        const [owner, address1, address2] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();

        await hardhatToken.transfer(address1.address,10);
        expect((await hardhatToken.balanceOfAdd(address1.address)).toString()).to.equal("10");

        await hardhatToken.connect(address1).transfer(address2.address, 5);
        expect((await hardhatToken.balanceOfAdd(address2.address)).toString()).to.equal("5");

    });


});
