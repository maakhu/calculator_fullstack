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

const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
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
    } as OperationsBuilder
  );

  return builder.operations;
};

const getState = (input: Array<CalcInput>): CalcState => {
  return { displayValue: 0 };
};

const Calculator = {
  getState,
};

export default Calculator;
