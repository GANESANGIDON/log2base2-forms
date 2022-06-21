import React, { Fragment } from "react";
import { Form } from "react-bootstrap";

export default function PhoneNumBox({ propId }) {
  return (
    <Fragment>
      <div>
        <Form.Label htmlFor={propId}>Mobile Number </Form.Label>
        <Form.Control type="number" id={propId} />
      </div>
    </Fragment>
  );
}
