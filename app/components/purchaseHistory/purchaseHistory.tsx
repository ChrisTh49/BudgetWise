// PurchaseHistory.tsx
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PurchaseCard from "./purchaseCard";
import PurchaseCardProps from "@/app/interfaces/purchaseCardInterface";

const PurchaseHistory = (purchases: PurchaseCardProps[]) => {
  console.log(purchases);
  return (
    <ScrollView style={styles.container}>
      {purchases.map((purchase, index) => (
        <PurchaseCard key={index} {...purchase} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 15,
  },
});

export default PurchaseHistory;
