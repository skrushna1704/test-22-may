const expenses = [
  { title: "Food", amount: 500 },
  { title: "Petrol", amount: 1000 },
  { title: "Movie", amount: 300 }
];

function getTotalExpense(expenses) {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

console.log(`Total Expense: ₹${getTotalExpense(expenses)}`);
