export const formatDeliveryPriceKey = (key: string): string => {
  switch (key) {
    case "totalPrice":
      return "Total price";
    case "surcharge":
      return "Surcharge";
    case "itemsFee":
      return "Items fee";
    case "distanceFee":
      return "Distance fee";
    case "fridayRush":
      return "Friday rush";
    default:
      return key;
  }
};
