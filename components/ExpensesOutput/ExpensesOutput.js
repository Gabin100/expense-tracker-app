import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some Bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 6.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e6",
    description: "tomatoes",
    amount: 5.99,
    date: new Date("2022-10-03"),
  },
  {
    id: "e7",
    description: "blander",
    amount: 10.99,
    date: new Date("2022-10-06"),
  },
  {
    id: "e8",
    description: "tea",
    amount: 6.99,
    date: new Date("2022-09-10"),
  },
  {
    id: "e9",
    description: "Mayonaise",
    amount: 12,
    date: new Date("2022-08-10"),
  },
  {
    id: "e10",
    description: "Rice for cooking",
    amount: 20.99,
    date: new Date("2022-10-01"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
