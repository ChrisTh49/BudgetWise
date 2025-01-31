export default interface PurchaseModalProps {
  visible: boolean;
  onClose: () => void;
  price: string;
  installments: number;
  completedInstallments: number;
  cardType: string;
  paymentMethod: string;
  description: string;
}
