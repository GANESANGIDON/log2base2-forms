import React, { Fragment } from "react";
import { Form } from "react-bootstrap";

export default function EmailBox({ propId }) {
  return (
    <Fragment>
      <div>
        <Form.Label htmlFor={propId}>Email Id </Form.Label>
        <Form.Control type="email" id={propId} />
      </div>
    </Fragment>
  );
}
