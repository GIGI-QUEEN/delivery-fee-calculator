type DeliveryPrice = {
  totalPrice: number;
  surcharge: number;
  itemsFee: number;
  distanceFee: number;
  fridayRush?: boolean;
  isDeliveryFree?: boolean;
};
