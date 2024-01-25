import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { calculateDeliveryPrice } from "../utils/utils";

export const useCalculator = () => {
  const [cartValue, setCartValue] = useState<number>(0);
  const [amountOfItems, setAmountOfItems] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0); // distance in meters
  //const [dateTime, setDateTime] = useState<Date>();
  const [surcharge, setSurcharge] = useState<number>(0);
  const [extraItemsFee, setExtraItemsFee] = useState<number>(0);
  const [deliveryPrice, setDeliveryPrice] = useState<number>(0);
  const [time, setTime] = useState<Dayjs>(dayjs());

  const handleClick = () => {
    //isFridayRush(time);
    const price = calculateDeliveryPrice(
      cartValue,
      amountOfItems,
      distance,
      time
    );
    setDeliveryPrice(price);
    console.log(`price: ${price}`);
  };
  return {
    cartValue,
    setCartValue,
    amountOfItems,
    setAmountOfItems,
    distance,
    setDistance,
    surcharge,
    setSurcharge,
    extraItemsFee,
    setExtraItemsFee,
    deliveryPrice,
    setDeliveryPrice,
    time,
    setTime,
    handleClick,
  };
};
