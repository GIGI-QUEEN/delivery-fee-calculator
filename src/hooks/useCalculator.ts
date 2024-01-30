import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { calculateDeliveryPrice } from "../utils/calculations";

export const useCalculator = () => {
  const [cartValue, setCartValue] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0); // distance in meters
  const [surcharge, setSurcharge] = useState<number>(0);
  const [itemsFee, setItemsFee] = useState<number>(0);
  const [time, setTime] = useState<Dayjs>(dayjs());
  const [error, setError] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [deliveryPrice, setDeliveryPrice] = useState<DeliveryPrice>({
    totalPrice: 0,
    surcharge: 0,
    itemsFee: 0,
    distanceFee: 0,
  });

  useEffect(() => {
    if (checkInputErrors()) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [cartValue, distance, numberOfItems]);

  const checkInputErrors = (): boolean => {
    if (cartValue === 0 || distance === 0 || numberOfItems === 0) {
      return true;
    }

    return false;
  };

  const handleClick = () => {
    if (checkInputErrors()) {
      setError(true);
      return;
    }

    const price = calculateDeliveryPrice({
      cartValue: cartValue,
      distance: distance,
      numberOfItems: numberOfItems,
      dateTime: time,
    });
    setDeliveryPrice(price);
    setError(false);
  };
  return {
    setCartValue,
    setNumberOfItems,
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
    error,
    cartValue,
    disabled,
  };
};
