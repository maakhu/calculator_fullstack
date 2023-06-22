import React, { FunctionComponent, useState } from "react";
import Display from "../Display/Display";
import { Digit, Operator } from '../../lib/types'
import "./Calculator.css";

export const Calculator: FunctionComponent = () => {
  const [memory, setMemory] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true)
  const [pendingOperator, setPendingOperator] = useState<Operator>()
  const [display, setDisplay] = useState<string>('0')

  const calculate = (rightOperand: number, pendingOperator: Operator): boolean => {
    let newResult = result

    switch (pendingOperator) {
      case '+':
        newResult += rightOperand
        break
      case '-':
        newResult -= rightOperand
        break
      case '×':
        newResult *= rightOperand
        break
      case '÷':
        if (rightOperand === 0) {
          return false
        }

        newResult /= rightOperand
    }

    setResult(newResult)
    setDisplay(newResult.toString().toString().slice(0, 12))

    return true
  }

  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display

    if ((display === '0' && digit === 0) || display.length > 12) {
      return
    }

    if (waitingForOperand) {
      newDisplay = ''
      setWaitingForOperand(false)
    }

    if (display !== '0') {
      newDisplay = newDisplay + digit.toString()
    } else {
      newDisplay = digit.toString()
    }

    setDisplay(newDisplay)
  }

  const onPointButtonClick = () => {
    let newDisplay = display

    if (waitingForOperand) {
      newDisplay = '0'
    }

    if (newDisplay.indexOf('.') === -1) {
      newDisplay = newDisplay + '.'
    }

    setDisplay(newDisplay)
    setWaitingForOperand(false)
  }

  const onOperatorButtonClick = (operator: Operator) => {
    const operand = Number(display)

    if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return
      }
    } else {
      setResult(operand)
    }

    setPendingOperator(operator)
    setWaitingForOperand(true)
  }

  const onChangeSignButtonClick = () => {
    const value = Number(display)

    if (value > 0) {
      setDisplay('-' + display)
    } else if (value < 0) {
      setDisplay(display.slice(1))
    }
  }

  const onEqualButtonClick = () => {
    const operand = Number(display)

    if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return
      }

      setPendingOperator(undefined)
    } else {
      setDisplay(operand.toString())
    }

    setResult(operand)
    setWaitingForOperand(true)
  }

  const onAllClearButtonClick = () => {
    setMemory(0)
    setResult(0)
    setPendingOperator(undefined)
    setDisplay('0')
    setWaitingForOperand(true)
  }

  const onClearEntryButtonClick = () => {
    setDisplay('0')
    setWaitingForOperand(true)
  }

  const onMemoryRecallButtonClick = () => {
    setDisplay(memory.toString())
    setWaitingForOperand(true)
  }

  const onMemoryClearButtonClick = () => {
    setMemory(0)
    setWaitingForOperand(true)
  }

  const onMemoryPlusButtonClick = () => {
    setMemory(memory + Number(display))
    setWaitingForOperand(true)
  }

  const onMemoryMinusButtonClick = () => {
    setMemory(memory - Number(display))
    setWaitingForOperand(true)
  }

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