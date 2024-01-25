import { Dayjs } from "dayjs";

export const calculateDeliveryPrice = (
  cartValue: number,
  numberOfItems: number,
  distance: number,
  dateTime: Dayjs
): DeliveryPrice => {
  const smallOrderSurcharge = calculateSmallOrderSurcharge(cartValue);
  const extraItemsFee = calculateItemsFee(numberOfItems);
  const distanceFee = calculateDistanceFee(distance);
  const fridayRush = isFridayRush(dateTime);
  const finalPrice = smallOrderSurcharge + extraItemsFee + distanceFee;
  let deliveryPrice: DeliveryPrice = {
    totalPrice: finalPrice,
    surcharge: smallOrderSurcharge,
    itemsFee: extraItemsFee,
    distanceFee: distanceFee,
  };
  if (fridayRush) {
    deliveryPrice.totalPrice *= 1.2;
    return deliveryPrice;
  }
  return deliveryPrice;
};

//If the cart value is less than 10€, a small order surcharge is added to the delivery price.
//The surcharge is the difference between the cart value and 10€.
//For example if the cart value is 8.90€, the surcharge will be 1.10€.
export const calculateSmallOrderSurcharge = (cartValue: number): number => {
  if (cartValue < 10) {
    return (10 * 100 - cartValue * 100) / 100;
  }
  return 0;
};

//If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including the fifth item.
//An extra "bulk" fee applies for more than 12 items of 1,20€
//Example 1: If the number of items is 4, no extra surcharge
//Example 2: If the number of items is 5, 50 cents surcharge is added
//Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
//Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)
//Example 5: If the number of items is 14, 6,20€ surcharge is added ((10 * 50 cents) + 1,20€)

export const calculateItemsFee = (numberOfItems: number): number => {
  const bulk = 1.2;
  const feeMultiplier = 0.5;

  if (numberOfItems > 4 && numberOfItems <= 12) {
    return (numberOfItems - 4) * feeMultiplier;
  }
  if (numberOfItems > 12) {
    return (numberOfItems - 4) * feeMultiplier + bulk;
  }
  return 0;
};

//A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination.
//Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
//Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
//Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
//Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€

export const calculateDistanceFee = (distance: number): number => {
  const baseFee = 2;
  if (distance <= 1000) {
    return baseFee;
  }
  const pureDistance = distance - 1000;
  //console.log("initial distance: ", distance);
  //console.log("pure distance: ", pureDistance);
  const multiplier = Math.ceil(pureDistance / 500);

  // console.log("distance price: ", baseFee + multiplier);
  return baseFee + multiplier;
};

//During the Friday rush, 3 - 7 PM, the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x.
//However, the fee still cannot be more than the max (15€).
//In frontend solutions, use the timezone of the browser (so Friday rush is 3 - 7 PM in the timezone of the browser).

export const calculateFridayRush = (dateTime: Date): boolean => {
  const day = dateTime.getDay();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  if (day === 5 && hours >= 15 && hours + minutes / 60 <= 19) {
    //console.log("firdayRush");

    return true;
  }
  return false;
};

export const isFridayRush = (dateTime: Dayjs): boolean => {
  const day = dateTime.day();
  const hour = dateTime.hour();
  const minute = dateTime.minute();
  console.log(`day: ${day}, hour: ${hour}, minute: ${minute}`);
  if (day === 5 && hour >= 15 && hour + minute / 60 <= 19) {
    return true;
  }
  return false;
};
