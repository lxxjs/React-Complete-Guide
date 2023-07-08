import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const items = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesList items={items} />
      </Card>
    </div>
  );
}

export default Expenses;
