export class Employee {
    message: string;
    employeeRole: string;
    employeeId: string;

    constructor(message: string, employeeRole: string, employeeId: string) {
        this.message = message;
        this.employeeId = employeeId;
        this.employeeRole = employeeRole;
    }
}
