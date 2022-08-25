const Intern = require("../lib/Intern.js");



describe("Intern", () => {
    it("should get school", () => {
        const school = "University Of Utah";
        const obj = new Intern(school);
        // const obj = new Employee("")

        expect(obj.school).toEqual("University Of Utah");


    });
});