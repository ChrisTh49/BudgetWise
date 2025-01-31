// HomeScreen.tsx
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "expo-router";
import data from "../data/purchaseHistory.json";
import CustomAppLoading from "../components/appLoading";
import HeaderCard from "../components/home/headerCard";
import BalanceSection from "../components/home/balanceSection";
import PurchaseCard from "../components/purchaseHistory/purchaseCard";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Manrope-Regular": require("../../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("../../assets/fonts/Manrope-Bold.ttf"),
  });
  
  if (!fontsLoaded) {
    return <CustomAppLoading />;
  }

  const [isIncomeActive, setIsIncomeActive] = useState(false);
  const [isBalanceActive, setIsBalanceActive] = useState(false);

  const handleEyesState = (type: string) => {
    if (type === "income") {
      setIsIncomeActive((prev) => !prev);
    } else if (type === "balance") {
      setIsBalanceActive((prev) => !prev);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCard>
        <View style={styles.content}>
          <BalanceSection
            title="Income"
            value="24.000$"
            isActive={isIncomeActive}
            onPress={() => handleEyesState("income")}
          />
          <BalanceSection
            title="Your Balance"
            value="1.000$"
            isActive={isBalanceActive}
            onPress={() => handleEyesState("balance")}
          />
        </View>
      </HeaderCard>
      <ScrollView style={styles.cardContainer}>
        {data.map((item, index) => {
          return (
            <PurchaseCard
              price={item.price}
              installments={item.installments}
              completedInstallments={item.completedInstallments}
              cardType={item.cardType}
              paymentMethod={item.paymentMethod}
              description={item.description}
              key={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  content: {
    width: "90%",
  },
  cardContainer: {
    width: "90%",
    marginHorizontal: 20,
  },
});
