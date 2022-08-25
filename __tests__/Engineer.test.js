const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    it("should get github", () => {

        const obj = new Engineer("github");
        // const obj = new Employee("")

        expect(obj.github).toEqual("github");


    });
});