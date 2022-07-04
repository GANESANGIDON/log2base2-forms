import React, { Fragment } from "react";
import "../styles/formUi.css";

export default function FormHeader() {
  return (
    <Fragment>
      <h2 className="counselling-form-title mb-2">Not sure where to start?</h2>
      <h3 className="counselling-form-subtitle">
        No problem, we are here to help!
      </h3>
    </Fragment>
  );
}
