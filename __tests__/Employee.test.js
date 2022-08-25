const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should get name", () => {
        const obj = new Employee("Jonathon", 1, "Darin");

        expect(obj instanceof Employee).toEqual(true);
        expect(obj.name).toEqual("Jonathon");
        expect(obj.id).toEqual(1);
        expect(obj.email).toEqual("Darin");
    });
});