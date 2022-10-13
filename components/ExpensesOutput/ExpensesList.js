import { View, Text, StyleSheet, FlatList } from "react-native";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.title}</Text>;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

const styles = StyleSheet.create({});
