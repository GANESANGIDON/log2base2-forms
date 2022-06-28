import React, { Fragment } from "react";
import "../styles/formUi.css";

export default function FormHeader() {
  return (
    <Fragment>
      <h2 className="counselling-form-title mb-1">
        Confused on choosing a right course ?
      </h2>
      <h3 className="counselling-form-subtitle">Talk to our experts</h3>
    </Fragment>
  );
}
