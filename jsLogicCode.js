class StudentManagementSystem {
  constructor() {
    this.students = [];
  }

  // Add Student
  addStudent(id, name, age, marks) {
    const existingStudent = this.students.find(
      (student) => student.id === id
    );

    if (existingStudent) {
      console.log(`Student with ID ${id} already exists`);
      return;
    }

    this.students.push({
      id,
      name,
      age,
      marks,
    });

    console.log(`${name} added successfully`);
  }

  // View Students
  viewStudents() {
    console.table(this.students);
  }

  // Search Student
  searchStudent(name) {
    const result = this.students.filter((student) =>
      student.name.toLowerCase().includes(name.toLowerCase())
    );

    if (result.length === 0) {
      console.log("No student found");
      return;
    }

    console.table(result);
  }

  // Update Marks
  updateMarks(id, newMarks) {
    const student = this.students.find((student) => student.id === id);

    if (!student) {
      console.log("Student not found");
      return;
    }

    student.marks = newMarks;
    console.log("Marks updated successfully");
  }

  // Delete Student
  deleteStudent(id) {
    const originalLength = this.students.length;

    this.students = this.students.filter(
      (student) => student.id !== id
    );

    if (this.students.length < originalLength) {
      console.log("Student deleted successfully");
    } else {
      console.log("Student not found");
    }
  }

  // Calculate Percentage
  calculatePercentage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return (total / (marks.length * 100)) * 100;
  }

  // Grade Generator
  getGrade(percentage) {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    return "Fail";
  }

  // Generate Report Card
  generateReport(id) {
    const student = this.students.find((student) => student.id === id);

    if (!student) {
      console.log("Student not found");
      return;
    }

    const percentage = this.calculatePercentage(student.marks);

    const report = {
      Name: student.name,
      Age: student.age,
      Marks: student.marks.join(", "),
      Percentage: percentage.toFixed(2) + "%",
      Grade: this.getGrade(percentage),
    };

    console.table([report]);
  }

  // Rank Students
  rankStudents() {
    const rankedStudents = [...this.students]
      .map((student) => ({
        ...student,
        percentage: this.calculatePercentage(student.marks),
      }))
      .sort((a, b) => b.percentage - a.percentage);

    console.table(
      rankedStudents.map((student, index) => ({
        Rank: index + 1,
        Name: student.name,
        Percentage: student.percentage.toFixed(2),
      }))
    );
  }

  // Topper
  findTopper() {
    const topper = this.students.reduce((best, current) => {
      const bestPer = this.calculatePercentage(best.marks);
      const currentPer = this.calculatePercentage(current.marks);

      return currentPer > bestPer ? current : best;
    });

    console.log("Topper:");
    this.generateReport(topper.id);
  }

  // Statistics
  classStatistics() {
    const percentages = this.students.map((student) =>
      this.calculatePercentage(student.marks)
    );

    const average =
      percentages.reduce((sum, per) => sum + per, 0) /
      percentages.length;

    const highest = Math.max(...percentages);
    const lowest = Math.min(...percentages);

    console.log("Class Statistics");
    console.log("----------------");
    console.log("Average:", average.toFixed(2));
    console.log("Highest:", highest.toFixed(2));
    console.log("Lowest:", lowest.toFixed(2));
  }

  // Passed Students
  passedStudents() {
    const passed = this.students.filter(
      (student) =>
        this.calculatePercentage(student.marks) >= 40
    );

    console.table(passed);
  }

  // Failed Students
  failedStudents() {
    const failed = this.students.filter(
      (student) =>
        this.calculatePercentage(student.marks) < 40
    );

    console.table(failed);
  }

  // Sort By Name
  sortByName() {
    const sorted = [...this.students].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    console.table(sorted);
  }

  // Sort By Percentage
  sortByPercentage() {
    const sorted = [...this.students]
      .map((student) => ({
        ...student,
        percentage: this.calculatePercentage(student.marks),
      }))
      .sort((a, b) => b.percentage - a.percentage);

    console.table(sorted);
  }
}

// ----------------------------
// Usage
// ----------------------------

const sms = new StudentManagementSystem();

sms.addStudent(1, "Shrikrushna", 25, [85, 90, 88, 92, 95]);
sms.addStudent(2, "Ankit", 24, [75, 70, 78, 80, 82]);
sms.addStudent(3, "Viraj", 23, [95, 92, 97, 98, 96]);
sms.addStudent(4, "Abee", 26, [45, 50, 48, 42, 40]);

sms.viewStudents();

sms.searchStudent("vir");

sms.generateReport(1);

sms.rankStudents();

sms.findTopper();

sms.classStatistics();

sms.passedStudents();

sms.failedStudents();

sms.sortByName();

sms.sortByPercentage();

sms.updateMarks(4, [80, 82, 85, 88, 90]);

sms.deleteStudent(2);

sms.viewStudents();
