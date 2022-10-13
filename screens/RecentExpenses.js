import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return new Date(expense.date) > new Date(date7DaysAgo);
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' />
  );
};

export default RecentExpenses;
