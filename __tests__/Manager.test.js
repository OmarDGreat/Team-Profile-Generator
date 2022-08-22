const Manager = require('../src/Manager');
const Employee = require('../src/Employee');

test("Can set office number via constrictor argument", () => {
    const testValue = 100;
    const manager = new Manager("Omar", 1, "test@tast.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
} );

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const manager = new Manager("Omar", 1, "test@tast.com", 100);
    expect(manager.getRole()).toBe(testValue);
} );

test("Can get office number via getOfficeNumber()", () => {
    const testValue = 100;
    const manager = new Manager("Omar", 1, "test@tast.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
} );