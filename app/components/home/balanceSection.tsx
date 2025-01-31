// BalanceSection.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BalanceSectionProps {
  title: string;
  value: string;
  isActive: boolean;
  onPress: () => void;
}

const BalanceSection: React.FC<BalanceSectionProps> = ({
  title,
  value,
  isActive,
  onPress,
}) => (
  <View style={styles.row}>
    <Text style={styles.headerText}>{title}:</Text>
    <View style={styles.showButton}>
      <Text style={styles.balanceText}>{isActive ? value : "******"}</Text>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={isActive ? "eye-off" : "eye"}
          color="#FCFCFC"
          size={20}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerText: {
    color: "#FCFCFC",
    fontSize: 20,
    fontFamily: "Manrope-Regular",
  },
  balanceText: {
    color: "#FCFCFC",
    fontSize: 35,
    fontFamily: "Manrope-Bold",
  },
  row: {
    marginVertical: 10,
  },
  showButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default BalanceSection;
