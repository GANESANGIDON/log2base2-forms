import React from "react";
import { Form } from "react-bootstrap";
import "../styles/InputBox.css";

export default function EmailBox({ inputId }) {
  return (
    <div className="form-input-div w-100">
      <Form.Control
        className="input-field"
        type="email"
        name="EmailId"
        id={inputId}
        placeholder=" "
        required
      />
      <Form.Label className="input-lbl" htmlFor={inputId}>
        Email Id
      </Form.Label>
    </div>
  );
}
