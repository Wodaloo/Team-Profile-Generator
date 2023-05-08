const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Wodaloo";
    const employeeInstance = new Engineer("Mason", 2, "mason@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Wodaloo";
    const employeeInstance = new Engineer("Mason", 2, "mason@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Mason", 2, "mason@gmail.com", "JamesLJenks");
    expect(employeeInstance.getRole()).toBe(returnValue);
});