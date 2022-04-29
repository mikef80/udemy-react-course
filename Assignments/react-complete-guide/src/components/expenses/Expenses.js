import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYearValue, setFilterYearValue] = useState("2022");

  const filterChangeHandler = (value) => {
    // console.log(`filter changed to ${value}`);
    setFilterYearValue(value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === Number(filterYearValue);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYearValue}
        onYearChange={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
