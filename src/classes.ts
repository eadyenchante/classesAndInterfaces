abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return {
      name: name,
    };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee("maxine");
console.log(employee1, Department.fiscalYear);

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(console.log("IT department - ID: " + this.id));
  }
}
////////////

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('b2', []);
    return this.instance;
  }

  describe() {
    console.log("Accounting department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const IT = new ITDepartment("1a", []);

//////////

const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "year end report";

accounting.addReport("something went wrong");

console.log(accounting.mostRecentReport);

accounting.addEmployee("max");
accounting.addEmployee("manu");
// accounting.printReports();
// accounting.printEmployeeInfo();
// console.log(accounting);

accounting.describe();

IT.addEmployee("max");
IT.addEmployee("manu");

// IT.employees[3] = 'anna';

IT.describe();
IT.printEmployeeInfo();
console.log(IT);

// const accountingCopy = {
//   describe: accounting.describe,
//   name: 's'
// };

// accountingCopy.describe();
