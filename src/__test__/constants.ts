import dayjs from "dayjs";
import "./setup-tests";
export const cartValueId = "cartValue";
export const deliveryDistanceId = "deliveryDistance";
export const numberOfItemsId = "numberOfItems";
export const orderTimeId = "orderTime";

export const feeElementId = "fee";
export const calculateButtonId = "calculateButton";

export const inputIds = [
  cartValueId,
  deliveryDistanceId,
  numberOfItemsId,
  orderTimeId,
];

export const defaultTime = dayjs("03/17/2028 02:55 PM"); //not friday rush
export const fridayRushTime = dayjs("01/26/2024 06:05 PM");
