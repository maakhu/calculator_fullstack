import Calculator from "./calculator";
import {
  Digit,
  Operator,
  InputType,
  OperatorType,
  CalcInput,
  CalcState,
  Operation,
  OperationsBuilder
} from "../lib/types";

test("generate operations", () => {
  const inputs: Array<CalcInput> = [
    { type: InputType.Digit, value: 1 },
    { type: InputType.Digit, value: 2 },
    { type: InputType.Operator, OperatorType: OperatorType.Add },
    { type: InputType.Digit, value: 3 },
    { type: InputType.Operator, OperatorType: OperatorType.Equals },
  ];

  const operations: Array<Operation> = [
    { operator: OperatorType.Add, value: 12 },
    { operator: OperatorType.Add, value: 3 },
    { operator: OperatorType.Equals, value: 0 },
  ];

  expect(Calculator.getOperations(inputs)).toEqual(operations);
});

test("derive state", () => {
  const inputs = [
    { type: "Digit", value: 1 },
    { type: "Digit", value: 2 },
    { type: "Operator", OperatorType: "Add" },
    { type: "Digit", value: 3 },
    { type: "Operator", OperatorType: "Equals" },
  ];
});

test("derive state 2", () => {
  const input: Array<CalcInput> = [
    { type: InputType.Digit, value: 1 },
    { type: InputType.Digit, value: 2 },
    { type: InputType.Operator, OperatorType: OperatorType.Add },
    { type: InputType.Digit, value: 3 },
    { type: InputType.Operator, OperatorType: OperatorType.Equals },
  ]
  const state = Calculator.getState(input);
  expect (state.displayValue).toEqual(15)
});
