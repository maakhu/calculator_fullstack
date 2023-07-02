import React, { FunctionComponent, useEffect, useState } from "react";
import Display from "../Display/Display";
import {  Operator } from "../../lib/types";
import getMemory from "../../api/getMemory";
import postMemory from "../../api/postMemory";
import "./Calculator.css";

export const Calculator: FunctionComponent = () => {
  const [memory, setMemory] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<Operator>();
  const [display, setDisplay] = useState<string>("");


  const numPad = [
    ["M+", "M", "C", "+"],
    [1, 2, 3, "-"],
    [4, 5, 6, "*"],
    [7, 8, 9, "/"],
    [".", 0, "<", "="],
  ];

  useEffect(() => {
    fetchGetMemory();
  }, []);

  const fetchGetMemory = async () => {
    try {
      const memoryValue = await getMemory();
      setMemory(memoryValue);
    } catch (error) {
      console.error("Error fetching memory:", error);
    }
  };

  const fetchPostMemory = async (memory: number) => {
    try {
      await postMemory(memory);
    } catch (error) {
      console.error("Error posting memory:", error);
    }
  };

  const calculate = (
    rightOperand: number,
    pendingOperator: Operator
  ): boolean => {
    let newResult = result;

    switch (pendingOperator) {
      case "+":
        newResult += rightOperand;
        break;
      case "-":
        newResult -= rightOperand;
        break;
      case "×":
        newResult *= rightOperand;
        break;
      case "÷":
        if (rightOperand === 0) {
          return false;
        }

        newResult /= rightOperand;
    }

    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));

    return true;
  };

  const onDigitButtonClick = (digit: number) => {

    setDisplay((currentValue: string) => {
      return currentValue + digit.toString();
    })
      let newDisplay = display;

      if ((display === "0" && digit === 0) || display.length > 12) {
        return;
      }

      if (waitingForOperand) {
        newDisplay = "";
        setWaitingForOperand(false);
      }

      if (display !== "0") {
        newDisplay = newDisplay + digit.toString();
      } else {
        newDisplay = digit.toString();
      }

      setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (waitingForOperand) {
      newDisplay = "0";
    }

    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator: string) => {
      const currentNumber = Number(display);
      setResult (currentNumber)
      
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }

      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const onAllClearButtonClick = () => {
    setMemory(0);
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onClearEntryButtonClick = () => {
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onMemoryRecallButtonClick = () => {
    setDisplay(memory.toString());
    setWaitingForOperand(true);
  };

  const onMemoryClearButtonClick = () => {
    setMemory(0);
    setWaitingForOperand(true);
  };

  const onMemoryPlusButtonClick = () => {
    setMemory(memory + Number(display));
    setWaitingForOperand(true);
  };

  const onMemoryDoubleButtonClick = () => {
    setMemory(memory - Number(display));
    setWaitingForOperand(true);
  };

  return (
    <div className="container">
      <h1>
        <span>Calculator</span>
      </h1>
      <h4>by Máté Egri</h4>
      <div className="calculator">
        <Display
          hasMemory={memory !== 0}
          expression={
            typeof pendingOperator !== "undefined"
              ? `${result}${pendingOperator}${waitingForOperand ? "" : display}`
              : ""
          }
          value={display ? display : "0"}
        />
        {numPad.map((row, i) => {
          return (
            <div className="buttonRow" key={row[i]}>
              {row.map((button) => {
                return (
                  <button
                    key={button}
                    onClick={() => {
                      if (typeof button === "number") {
                        onDigitButtonClick(button);
                      } else {
                        onOperatorButtonClick(button);
                      }
                    }}
                  >
                    {button}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
