import DeliveryFeeCalculator from "../components/DeliveryFeeCalculator";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./setup-tests";
import {
  calculateButtonId,
  cartValueId,
  defaultTime,
  deliveryDistanceId,
  feeElementId,
  inputIds,
  numberOfItemsId,
  orderTimeId,
} from "./constants";
import { clickButton, insertValueIntoInputField } from "./helpers";

describe("DeliveryFee component testing", () => {
  let feeElement: HTMLInputElement,
    cartValueElement: HTMLInputElement,
    distanceElement: HTMLInputElement,
    numberOfItemsElement: HTMLInputElement,
    datetimeElement: HTMLInputElement;
  let calulateButtonElement: HTMLElement;
  beforeEach(() => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DeliveryFeeCalculator />
      </LocalizationProvider>
    );
    feeElement = screen.getByTestId(feeElementId);
    cartValueElement = screen.getByTestId(cartValueId);
    distanceElement = screen.getByTestId(deliveryDistanceId);
    numberOfItemsElement = screen.getByTestId(numberOfItemsId);
    datetimeElement = screen.getByTestId(orderTimeId);
    calulateButtonElement = screen.getByTestId(calculateButtonId);
  });

  it("Render delivery fee calculator", () => {
    const calculatorTitle = screen.getByText(/delivery fee calculator/i);
    expect(calculatorTitle).toBeInTheDocument();

    inputIds.forEach((id) => {
      const inputElement = screen.getByTestId(id);
      expect(inputElement).toBeInTheDocument();
    });

    const priceElement = screen.getByTestId("fee");
    expect(priceElement).toBeInTheDocument();
  });

  it("Input fields don't accept letters", () => {
    inputIds.forEach((id) => {
      if (id === orderTimeId) return; //skipping order time input since it has a bit different behavior
      const inputElement: HTMLInputElement = screen.getByTestId(id);
      insertValueIntoInputField(inputElement, "abcdefg");
      expect(inputElement.value).toBe("");
    });
  });

  it("Render correct delivery price case 1", () => {
    insertValueIntoInputField(cartValueElement, "12");
    insertValueIntoInputField(distanceElement, "3476");
    insertValueIntoInputField(numberOfItemsElement, "8");
    insertValueIntoInputField(datetimeElement, defaultTime.toString());
    clickButton(calulateButtonElement);
    expect(feeElement.textContent).toBe("9");
  });

  it("Render correct delivery price case 2", () => {
    insertValueIntoInputField(cartValueElement, "20");
    insertValueIntoInputField(distanceElement, "900");
    insertValueIntoInputField(numberOfItemsElement, "1");
    insertValueIntoInputField(datetimeElement, defaultTime.toString());
    clickButton(calulateButtonElement);
    expect(feeElement.textContent).toBe("2");
  });

  it("Render correct delivery price case 3; price is 0 when cart value is equal or more than 200", () => {
    insertValueIntoInputField(cartValueElement, "200");
    insertValueIntoInputField(distanceElement, "6780");
    insertValueIntoInputField(numberOfItemsElement, "8");
    insertValueIntoInputField(datetimeElement, defaultTime.toString());
    clickButton(calulateButtonElement);
    expect(feeElement.textContent).toBe("0");
  });

  it("Render correct delivery price case 4; delivery price will never be more than 15", () => {
    insertValueIntoInputField(cartValueElement, "20");
    insertValueIntoInputField(distanceElement, "4035");
    insertValueIntoInputField(numberOfItemsElement, "14");
    insertValueIntoInputField(datetimeElement, defaultTime.toString());
    clickButton(calulateButtonElement);
    expect(feeElement.textContent).toBe("15");
  });

  it("Render correct delivery price case 5; friday rush case", () => {
    insertValueIntoInputField(cartValueElement, "17");
    insertValueIntoInputField(distanceElement, "2499");
    insertValueIntoInputField(numberOfItemsElement, "7");
    insertValueIntoInputField(datetimeElement, "01/26/2024 06:05 PM");
    clickButton(calulateButtonElement);
    expect(feeElement.textContent).toBe("7.8");
  });
});
