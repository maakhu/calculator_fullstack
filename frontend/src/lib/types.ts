export type Operator = "+" | "-" | "×" | "÷";
export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export enum InputType {
  Digit,
  Operator,
}

export enum OperatorType {
  Add,
  Subtract,
  Multiply,
  Divide,
  Equals,
}

export type CalcInput =
  | { type: InputType.Digit; value: number }
  | { type: InputType.Operator; OperatorType: OperatorType };

export type CalcState = {
  displayValue: number;
};

export type Operation = {
  operator: OperatorType;
  value: number;
};

export type OperationsBuilder = {
  operations: Operation[];
  working: Omit<Operation, "operator">;
};
