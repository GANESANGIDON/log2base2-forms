import React from "react";
import { Form } from "react-bootstrap";
import "../styles/InputBox.css";

export default function PhoneNumBox({ inputId }) {
  return (
    <div className="form-input-div w-100">
      <Form.Control
        className="input-field"
        type="number"
        name="MobileNumber"
        id={inputId}
        placeholder=" "
        required
      />
      <Form.Label className="input-lbl" htmlFor={inputId}>
        Mobile Number
      </Form.Label>
    </div>
  );
}
