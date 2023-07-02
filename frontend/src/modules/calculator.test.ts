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

test("generates operations", () => {
  const inputs: Array<CalcInput> = [
    { type: InputType.Digit, value: 1 },
    { type: InputType.Digit, value: 2 },
    { type: InputType.Operator, operator: OperatorType.Add },
    { type: InputType.Digit, value: 3 },
  ];
  const operations: Array<Operation> = [
    { operator: OperatorType.Add, value: 12 },
    { operator: OperatorType.Add, value: 3 },
    { operator: OperatorType.Equals, value: 0 },
  ];
  expect(Calculator.getOperationsBuilder(inputs).operations).toEqual(operations);
});

test('has displayValue of "0" with no input', () => {
  const inputs: Array<CalcInput> = [];

  const state = Calculator.getState(inputs);
  expect(state.displayValue).toEqual(0);
});

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
