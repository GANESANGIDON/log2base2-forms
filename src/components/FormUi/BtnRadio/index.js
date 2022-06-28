import React, { Fragment } from "react";
import "../styles/BtnChoiceInput.css";

export default function BtnRadio({ inputId, lblText, inputName }) {
  return (
    <Fragment>
      <input
        type="radio"
        id={inputId}
        className="btn-choice-input"
        name={inputName}
      />
      <label htmlFor={inputId} className="btn-choice-lbl" name={inputName}>
        {lblText}
      </label>
    </Fragment>
  );
}
