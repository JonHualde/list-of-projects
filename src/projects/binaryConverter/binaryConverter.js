/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import "./binaryConverter.scss";

const BinaryConverter = () => {
  const [binaryValue, setBinaryValue] = useState("");
  const [decimalValue, setDecimalValue] = useState("");

  function checkBinaryInput() {
    const letters = /^[A-Za-z]+$/;
    const numbersFromTwoToNine = /^[0-9]+$/;
    const binaryNumbers = /^[01]+$/;

    if (binaryValue.match(letters)) {
      alert("Remove letters please");
      return false;
    } else if (binaryValue.match(binaryNumbers)) {
      setDecimalValue(parseInt(binaryValue, 2));
    } else if (binaryValue.match(numbersFromTwoToNine)) {
      alert("Remove numbers higher than 1 please");
      return false;
    } else {
      alert("Please enter a value");
    }
  }

  function Reset() {
    setBinaryValue("");
    setDecimalValue("");
  }

  return (
    <div className="binary_container">
      <h1>Convert binary numbers</h1>
      <div className="binary_input_container">
        <input
          id="binary-input"
          placeholder="Binary input"
          value=""
          onChange={(e) => setBinaryValue(e.target.value)}
          value={binaryValue}
        />
      </div>
      <div className="button_container">
        <button onClick={checkBinaryInput}>Convert it</button>
      </div>
      <div className="binary_output_container">
        <input
          id="binary-output"
          placeholder="Number output"
          value={decimalValue}
        />
      </div>
      <div className="button_container">
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default BinaryConverter;
