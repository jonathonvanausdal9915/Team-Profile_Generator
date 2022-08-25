const Manager = require("../lib/Manager");



describe("Manager", () => {
    it("should get officeNumber", () => {
        const officeNumber = "1234";
        const obj = new Manager(officeNumber);


        expect(obj.officeNumber).toEqual("1234");


    });
});