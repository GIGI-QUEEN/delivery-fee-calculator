import { List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { euroSign } from "../../constants/constants";
import { formatDeliveryPriceKey } from "../../utils/formatting";

interface IPriceInfoList {
  deliveryPrice: DeliveryPrice;
}

export const PriceInfoList: FC<IPriceInfoList> = ({ deliveryPrice }) => {
  return (
    <List>
      {Object.entries(deliveryPrice).map(([key, value]) => {
        if (key === "totalPrice") return;
        if (key === "fridayRush" && deliveryPrice.fridayRush === false) return;
        const formattedKey = formatDeliveryPriceKey(key);
        const price = (
          deliveryPrice.surcharge +
          deliveryPrice.itemsFee +
          deliveryPrice.distanceFee
        ).toFixed(2); //total price but not affected by friday rush multiplier - needed to show that total price is multiplied by 1.2 on line 26

        return (
          <ListItem key={key}>
            {key === "fridayRush" ? (
              <Typography>{`${formattedKey}: ${price}${euroSign}*1.2`}</Typography>
            ) : (
              <Typography>{`${formattedKey}: ${value}${euroSign}`}</Typography>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};
