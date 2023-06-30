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

const getOperationsBuilder = (inputs: Array<CalcInput>): OperationsBuilder => {
  const builder = inputs.reduce<OperationsBuilder>(
    (builder, input) => {
      switch (input.type) {
        case InputType.Digit:
          const prevValue = builder.working?.value || 0;
          const newValue = prevValue * 10 + input.value;
          return {
            ...builder,
            working: { ...builder.working, value: newValue },
          };

        case InputType.Operator:
          if (input.operator === OperatorType.Equals) {
            return {
              operations: [
                ...builder.operations,
                builder.working,
                { operator: OperatorType.Equals, value: 0 },
              ],
              working: { operator: OperatorType.Add, value: 0 },
            };
          } else {
            return {
              operations: [...builder.operations, builder.working],
              working: { operator: input.operator, value: 0 },
            };
          }
      }
    },
    {
      operations: [],
      working: { operator: OperatorType.Add, value: 0 },
    }
  );
  return builder;
};

const getTotal = (operations: Array<Operation>): number =>
  operations.reduce<number>((sum, operation) => sum + operation.value, 0);

const getState = (inputs: Array<CalcInput>): CalcState => {
  const builder = getOperationsBuilder(inputs);
  const { operations } = builder;
  const lastOperation = operations.length
    ? operations[operations.length - 1]
    : null;
  if (!lastOperation) return { displayValue: 0 };
  switch (lastOperation.operator) {
    case OperatorType.Equals:
      return { displayValue: getTotal(operations) };
    default:
      return { displayValue: builder.working.value };
  }
};

const Calculator = {
  getOperationsBuilder,
  getState,
};

export default Calculator;
