import { View, Text, StyleSheet } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}
  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          minLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({});
