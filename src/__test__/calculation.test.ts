import { calculateDeliveryPrice } from "../utils/calculations";
import { defaultTime, fridayRushTime } from "./constants";

describe("Delivery price calculation testing", () => {
  it("[totalPrice = 2] should result in calulateDeliveryPrice", () => {
    const deliveryPrice: DeliveryPrice = calculateDeliveryPrice({
      cartValue: 20,
      distance: 900,
      numberOfItems: 1,
      dateTime: defaultTime,
    });

    expect(deliveryPrice.totalPrice).toBe(2);
  });

  it("[totalPrice = 0] should result in calculateDeliveryPrice when cart value is equal or more than 200", () => {
    const deliveryPrice: DeliveryPrice = calculateDeliveryPrice({
      cartValue: 200,
      distance: 2500,
      numberOfItems: 1,
      dateTime: defaultTime,
    });
    expect(deliveryPrice.totalPrice).toBe(0);
  });

  it("[totalPrice = 2.4] should result in calculateDeliveryPrice when it's friday rush", () => {
    const deliveryPrice: DeliveryPrice = calculateDeliveryPrice({
      cartValue: 20,
      distance: 900,
      numberOfItems: 2,
      dateTime: fridayRushTime,
    });
    expect(deliveryPrice.totalPrice).toBe(2.4);
  });

  it("[totalPrice = 15] should result in calculateDeliveryPrice when all possible surcharges actual sum is more than 15", () => {
    const deliveryPrice: DeliveryPrice = calculateDeliveryPrice({
      cartValue: 5,
      distance: 7668,
      numberOfItems: 6,
      dateTime: defaultTime,
    });
    expect(deliveryPrice.totalPrice).toBe(15);
  });

  it("[totalPrice = 7.8] should result in calculateDeliveryPrice", () => {
    const deliveryPrice: DeliveryPrice = calculateDeliveryPrice({
      cartValue: 17,
      distance: 2499,
      numberOfItems: 7,
      dateTime: fridayRushTime,
    });
    expect(deliveryPrice.totalPrice).toBe(7.8);
  });
});
