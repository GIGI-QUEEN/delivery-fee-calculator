import { fireEvent } from "@testing-library/react";

export const insertValueIntoInputField = (
  inputElement: HTMLInputElement,
  value: string
) => {
  fireEvent.change(inputElement, { target: { value } });
};

export const clickButton = (button: HTMLElement) => {
  fireEvent.click(button);
};
