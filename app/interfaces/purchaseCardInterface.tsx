export default interface PurchaseCardProps {
  price: string;
  installments: number;
  completedInstallments: number;
  cardType: string;
  paymentMethod: string;
  description: string;
}
