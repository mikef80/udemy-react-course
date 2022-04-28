import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYearValue, setFilterYearValue] = useState("2022");

  const filterChangeHandler = (value) => {
    console.log(`filter changed to ${value}`);
    setFilterYearValue(value);
  };

  const filteredArr = props.items.filter((item) => {
    return item.date.getFullYear() === Number(filterYearValue);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYearValue}
        onYearChange={filterChangeHandler}
      />
      <Card className="expenseItem">
        {filteredArr.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </Card>
  );
};

export default Expenses;
