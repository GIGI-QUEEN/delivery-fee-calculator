import DeliveryFeeCalculator from "../components/DeliveryFeeCalculator";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./setup-tests";
import { inputIds, orderTimeId } from "./constants";

describe("DeliveryFee component testing", () => {
  beforeEach(() => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DeliveryFeeCalculator />
      </LocalizationProvider>
    );
  });

  it("Render delivery fee calculator", () => {
    const calculatorTitle = screen.getByText(/delivery fee calculator/i);
    expect(calculatorTitle).toBeInTheDocument();

    inputIds.forEach((id) => {
      const inputElement = screen.getByTestId(id);
      expect(inputElement).toBeInTheDocument();
    });
  });

  it("Render price element after calculate button was clicked", () => {
    const btn = screen.getByText(/calculate/i);
    fireEvent.click(btn);
    const result = screen.getByTestId("fee");
    expect(result).toBeInTheDocument();
  });

  it("Input fields don't accept letters", () => {
    inputIds.forEach((id) => {
      if (id === orderTimeId) return; //skipping order time input since it has a bit different behavior
      const inputElement: HTMLInputElement = screen.getByTestId(id);
      fireEvent.change(inputElement, { target: { value: "abcdefg" } });
      expect(inputElement.value).toBe("");
    });
  });
});
