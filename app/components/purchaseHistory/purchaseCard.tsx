// PurchaseCard.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PurchaseModal from "./purchaseModal";
import PurchaseCardProps from "@/app/interfaces/purchaseCardInterface";

const PurchaseCard: React.FC<PurchaseCardProps> = ({
  price,
  installments,
  completedInstallments,
  cardType,
  paymentMethod,
  description,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Price: {price}</Text>
        <Text style={styles.cardInfo}>
          {installments} installments, {completedInstallments} completed
        </Text>
        <Text style={styles.cardInfo}>Card Type: {cardType}</Text>
        <Text style={styles.cardInfo}>
          Payment Method: {paymentMethod === "debit" ? "Debit" : "Credit"}
        </Text>
      </View>
      <TouchableOpacity style={styles.viewButton} onPress={handleOpenModal}>
        <Text style={styles.viewButtonText}>View Details</Text>
        <Ionicons name="eye" color="#FCFCFC" size={20} />
      </TouchableOpacity>

      {modalVisible && (
        <PurchaseModal
          visible={modalVisible}
          onClose={handleCloseModal}
          price={price}
          installments={installments}
          completedInstallments={completedInstallments}
          cardType={cardType}
          paymentMethod={paymentMethod}
          description={description}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    backgroundColor: "#2E2E2E",
    borderRadius: 20,
    padding: 15,
    marginBottom: 18,
  },
  cardContent: {
    alignItems: "flex-start",
    marginBottom: 10,
  },
  cardTitle: {
    color: "#FCFCFC",
    fontSize: 18,
    fontFamily: "Manrope-Bold",
  },
  cardInfo: {
    color: "#FCFCFC",
    fontSize: 14,
    fontFamily: "Manrope-Regular",
    marginVertical: 5,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#723FEB",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  viewButtonText: {
    color: "#FCFCFC",
    marginRight: 5,
    fontSize: 16,
  },
});

export default PurchaseCard;
