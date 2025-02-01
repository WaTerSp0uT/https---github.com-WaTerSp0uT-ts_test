export class Employee{
    public employeeName: string;
    public emploeeAge: number;
    public employeeSalary: number;

    public static isEmployed = true;

    public static isSmart: boolean;

    static {
        Employee.isSmart = true;
        console.log("Static block executed!");
    }

    constructor(name: string, age: number = 0, salary: number = 10000) {
        this.employeeName = name;
        this.emploeeAge = age;
        this.employeeSalary = salary;
    }

    public work(): void {
        console.log(`${this.employeeName} is working!`);
    }

    public static payTax(): void {
        console.log("Paying taxes...");
    }
}

export function greetings(): void{
    console.log("Greetings!");
}