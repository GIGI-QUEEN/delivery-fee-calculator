import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { calculateDeliveryPrice } from "../utils/calculations";

export const useCalculator = () => {
  const [cartValue, setCartValue] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0); // distance in meters
  const [surcharge, setSurcharge] = useState<number>(0);
  const [itemsFee, setItemsFee] = useState<number>(0);
  const [time, setTime] = useState<Dayjs>(dayjs());
  const [deliveryPrice, setDeliveryPrice] = useState<DeliveryPrice>({
    totalPrice: 0,
    surcharge: 0,
    itemsFee: 0,
    distanceFee: 0,
  });

  const handleClick = () => {
    const price = calculateDeliveryPrice(
      cartValue,
      numberOfItems,
      distance,
      time
    );
    setDeliveryPrice(price);
  };
  return {
    cartValue,
    setCartValue,
    numberOfItems,
    setNumberOfItems,
    distance,
    setDistance,
    surcharge,
    setSurcharge,
    itemsFee,
    setItemsFee,
    deliveryPrice,
    setDeliveryPrice,
    time,
    setTime,
    handleClick,
  };
};
