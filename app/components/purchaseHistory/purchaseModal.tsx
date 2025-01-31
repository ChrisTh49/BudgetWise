// PurchaseModal.tsx
import PurchaseModalProps from "@/app/interfaces/purchaseModalInterface";
import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PurchaseModal: React.FC<PurchaseModalProps> = ({
  visible,
  onClose,
  price,
  installments,
  completedInstallments,
  cardType,
  paymentMethod,
  description,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Purchase Details</Text>
          <Text style={styles.modalText}>Price: {price}</Text>
          <Text style={styles.modalText}>
            Installments: {installments}, Completed: {completedInstallments}
          </Text>
          <Text style={styles.modalText}>Card Type: {cardType}</Text>
          <Text style={styles.modalText}>
            Payment Method: {paymentMethod === "debit" ? "Debit" : "Credit"}
          </Text>
          <Text style={styles.modalDescription}>{description}</Text>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#2E2E2E",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    color: "#FCFCFC",
    fontSize: 20,
    fontFamily: "Manrope-Bold",
    marginBottom: 10,
  },
  modalText: {
    color: "#FCFCFC",
    fontSize: 16,
    fontFamily: "Manrope-Regular",
    marginVertical: 5,
  },
  modalDescription: {
    color: "#FCFCFC",
    fontSize: 14,
    fontFamily: "Manrope-Regular",
    marginVertical: 10,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#723FEB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FCFCFC",
    fontSize: 16,
  },
});

export default PurchaseModal;
