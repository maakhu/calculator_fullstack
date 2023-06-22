import  { FunctionComponent } from 'react'
import "./Display.css";

interface DisplayProps {
  hasMemory: boolean
  expression: string
  value: string
}

export const Screen: FunctionComponent <DisplayProps> = ({ hasMemory, expression, value }) => {
  return (
    <div className="display">
      <div className="memory">{hasMemory ? "M" : ""}</div>
      <div className="curr-operation">{expression}</div>
      <div className="enteredNo">{value}</div>
    </div>
  );
}

export default Screen;


