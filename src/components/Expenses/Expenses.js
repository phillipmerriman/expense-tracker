import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onFilterChange={filterChangeHandler}
          />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
