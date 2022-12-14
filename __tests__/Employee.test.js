const Employee = require("../lib/Employee");

test("Can initiate Employee Instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

test("Can set name via constructor argument", () => {
  const name = "Alice";  
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const employee = new Employee("Omar", testValue);
    expect(employee.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Omar", 23, testValue);
    expect(employee.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const employee = new Employee("Omar", testValue);
    expect(employee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Omar", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test("Can get role via getRole()", () => {
    const testValue = "Employee";
    const employee = new Employee(testValue);
    expect(employee.getRole()).toBe(testValue);
});

