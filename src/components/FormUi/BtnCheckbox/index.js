import React, { Fragment } from "react";
import "../styles/BtnChoiceInput.css";

export default function BtnCheckbox({ inputId, lblText, inputName }) {
  return (
    <Fragment>
      <input
        type="checkbox"
        id={inputId}
        className="btn-choice-input"
        name={inputName}
      />
      <label htmlFor={inputId} className="btn-choice-lbl">
        {lblText}
      </label>
    </Fragment>
  );
}
