import React from "react";
import "./Calculator.css";
//write a frontend calculator using React

export default function Calculator() {
  return (
    <div className="calculatorPage">
      <h1>
        <span>Calculator</span>
      </h1>
      <h4>by Máté Egri</h4>
      <div className="calculator">
        <div className="display">
          <div className="curr-operation">0</div>
          <div className="enteredNo">0</div>
        </div>
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
          <button>DEL</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}
