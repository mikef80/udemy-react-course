import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYearValue, setFilterYearValue] = useState("2022");

  const filterChangeHandler = (value) => {
    // console.log(`filter changed to ${value}`);
    setFilterYearValue(value);
  };

  // console.log(props.items);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYearValue}
        onYearChange={filterChangeHandler}
      />
      <Card>
        {props.items.map((item) => {
          return (
            <ExpenseItem
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
