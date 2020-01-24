export class Employee {
    employeeRole: string;
    employeeId: string;

    constructor(employeeRole: string, employeeId: string) {
        this.employeeId = employeeId;
        this.employeeRole = employeeRole;
    }
}
