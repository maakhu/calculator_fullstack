import React, { FunctionComponent, useState } from "react";
import Display from "../Display/Display";
import { Operator } from '../../lib/types'
import "./Calculator.css";

export const Calculator: FunctionComponent = () => {
  const [memory, setMemory] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true)
  const [pendingOperator, setPendingOperator] = useState<Operator>()
  const [display, setDisplay] = useState<string>('0')

  return (
    <div className="container">
      <h1>
        <span>Calculator</span>
      </h1>
      <h4>by Máté Egri</h4>
      <div className="calculator">
        <Display hasMemory= {memory !== 0} expression={typeof pendingOperator !== 'undefined' ? `${result}${pendingOperator}${waitingForOperand ? '' : display}` : ''} value={display}/>
  
        <div className="buttonRow">
          <button>C</button>
          <button>M+</button>
          <button>M</button>
          <button>+</button>
        </div>
        <div className="buttonRow">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div className="buttonRow">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
        </div>
        <div className="buttonRow">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
        </div>
        <div className="buttonRow">
          <button>,</button>
          <button>0</button>
          <button>{"<"}</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;