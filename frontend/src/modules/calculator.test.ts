import Calculator from "./calculator";
import {
  Digit,
  Operator,
  InputType,
  OperatorType,
  CalcInput,
  CalcState,
  Operation,
  OperationsBuilder,
} from "../lib/types";

test("derives displayValue upon new num input", () => {
  const inputs: Array<CalcInput> = [
    { type: InputType.Digit, value: 2 },
    { type: InputType.Digit, value: 3 },
    { type: InputType.Operator, operator: OperatorType.Add },
    { type: InputType.Digit, value: 5 },
  ];
  const state = Calculator.getState(inputs);
  expect(state.displayValue).toEqual(28);
});

test("derives final state, addition", () => {
  const inputs: Array<CalcInput> = [
    { type: InputType.Digit, value: 2 },
    { type: InputType.Digit, value: 3 },
    { type: InputType.Operator, operator: OperatorType.Add },
    { type: InputType.Digit, value: 5 },
    { type: InputType.Operator, operator: OperatorType.Equals },
  ];
  const state = Calculator.getState(inputs);
  expect(state.displayValue).toEqual(28);
});

test("derives final state, add, subtact", () => {
  const input: Array<CalcInput> = [
    { type: InputType.Digit, value: 2 },
    { type: InputType.Digit, value: 2 },
    { type: InputType.Operator, operator: OperatorType.Add },
    { type: InputType.Digit, value: 3 },
    { type: InputType.Operator, operator: OperatorType.Subtract },
    { type: InputType.Digit, value: 5 },
    { type: InputType.Operator, operator: OperatorType.Equals },
  ];
  const state = Calculator.getState(input);
  expect(state.displayValue).toEqual(20);
});
