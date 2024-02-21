/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  
  it("counter displays correct initial value", () => {
    const {getByTestId} = render(<Counter initalCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  })

  it("counter shoud increment correctly after pressing incerement button", () => {
    const {getByTestId, getByRole} = render(<Counter initalCount={0} />);
    const incrementBtn = getByRole("button", {name: "Increment"})
    fireEvent.click(incrementBtn)
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  })
})