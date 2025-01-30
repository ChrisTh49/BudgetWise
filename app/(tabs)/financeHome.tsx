import { View, Text, StyleSheet } from "react-native";

export default function FinanceHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You arrived at the new page! 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    color: "#FCFCFC",
    fontSize: 24,
    fontWeight: "bold",
  },
});