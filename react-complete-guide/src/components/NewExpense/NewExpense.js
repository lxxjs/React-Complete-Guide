import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShowing(false);
  };

  const addExpenseHandler = () => {
    setIsShowing(true);
  };
  const cancelHandler = () => {
    setIsShowing(false);
  };

  return (
    <div className="new-expense">
      {!isShowing && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {isShowing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
