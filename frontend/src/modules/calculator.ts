import {
  Digit,
  Operator,
  InputType,
  OperatorType,
  CalcInput,
  CalcState,
  Operation,
} from "../lib/types";

const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
  inputs.reduce<Array<Operation>>((operations, input) => {
    const lastOperation: Operation = operations.length ? operations[operations.length - 1] : {operator: OperatorType.Add, value: 0, operator: OperatorType.Add};
    switch (input.type) {
      case: InputType.Digit: 

      case: InputType.Operator:
    }
    return [{ operator : OperatorType.Add, value: 0 }]
  }, [] as Array<Operation>);
  return [];
};
const getState = (input: Array<CalcInput>): CalcState => {
  return { displayValue: 0 };
};

const Calculator = {
  getState,
};

export default Calculator;
