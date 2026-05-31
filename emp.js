class EmployeeManagementSystem {
  constructor() {
    this.employees = [];
  }

  addEmployee(id, name, department, salary) {
    const employee = {
      id,
      name,
      department,
      salary
    };

    this.employees.push(employee);
    console.log(`${name} added successfully.`);
  }

  removeEmployee(id) {
    const index = this.employees.findIndex(emp => emp.id === id);

    if (index === -1) {
      console.log("Employee not found.");
      return;
    }

    const removedEmployee = this.employees.splice(index, 1);
    console.log(`${removedEmployee[0].name} removed.`);
  }

  updateSalary(id, newSalary) {
    const employee = this.employees.find(emp => emp.id === id);

    if (!employee) {
      console.log("Employee not found.");
      return;
    }

    employee.salary = newSalary;
    console.log(`${employee.name}'s salary updated.`);
  }

  searchEmployee(name) {
    const result = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(name.toLowerCase())
    );

    console.log(result);
  }

  getHighestPaidEmployee() {
    const employee = this.employees.reduce((highest, current) =>
      current.salary > highest.salary ? current : highest
    );

    console.log("Highest Paid Employee:");
    console.log(employee);
  }

  getTotalSalaryExpense() {
    const total = this.employees.reduce(
      (sum, employee) => sum + employee.salary,
      0
    );

    console.log(`Total Salary Expense: ₹${total}`);
  }

  filterByDepartment(department) {
    const result = this.employees.filter(
      emp => emp.department === department
    );

    console.log(result);
  }

  sortBySalary() {
    const sorted = [...this.employees].sort(
      (a, b) => b.salary - a.salary
    );

    console.table(sorted);
  }

  displayEmployees() {
    console.table(this.employees);
  }
}

const company = new EmployeeManagementSystem();

company.addEmployee(1, "Rahul", "IT", 50000);
company.addEmployee(2, "Amit", "HR", 40000);
company.addEmployee(3, "Priya", "IT", 70000);
company.addEmployee(4, "Sneha", "Finance", 60000);

company.displayEmployees();

company.updateSalary(2, 45000);

company.searchEmployee("Priya");

company.filterByDepartment("IT");

company.getHighestPaidEmployee();

company.getTotalSalaryExpense();

company.sortBySalary();

company.removeEmployee(1);

company.displayEmployees();
