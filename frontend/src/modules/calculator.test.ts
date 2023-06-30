










const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
  const builder: OperationsBuilder = inputs. reduce<OperationsBuilder> (
  (builder, input) =>
    switch (input.type) {
      case InputType.Numerical:
        const prevalue = builder.working?.value || 0;
        const newValue = prevalue * 10 + input. value;
        return {
  ...builder,
  working: { ...builder.working, value: newValue }, };
  
  case InputType. Operator:
  if (input.operator === OperatorType.Equals) {
  return {
  operations: I
  ...builder.operations, builder.working,
  { operator: OperatorType. Equals, value: 0 },
  ],
  working: R operator: OperatorType.Add, value: 0 h, };
  
} else {
  return {
  operations: I...builder.operations, builder.working], working: f operator: input.operator, value: 0 7, }:
  operations: [1,
  working: { operator: OperatorType.Add, value: 0 ),
  }
  );
