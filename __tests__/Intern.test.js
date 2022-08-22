const Intern = require('../lib/Intern');

test("Can set school via constructor argument", () => {
    const testValue = "Udacity";
    const intern = new Intern("Omar", 1, "test@tast.com", testValue);
    expect(intern.school).toBe(testValue);
} );

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const intern = new Intern("Omar", 1, "test@tast.com", "Udacity");
    expect(intern.getRole()).toBe(testValue);
} );

test("Can get school via getSchool()", () => {
    const testValue = "Udacity";
    const intern = new Intern("Omar", 1, "test@tast.com", testValue);
    expect(intern.getSchool()).toBe(testValue);
} );