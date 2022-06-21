import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import "./CounsellingForm.css";
import EmailBox from "../../FormUi/EmailBox";
import PhoneNumBox from "../../FormUi/PhoneNumBox";

export default function CounsellingForm() {
  return (
    <Fragment>
      <Form className="CounsellingForm p-4">
        {/* Email input box starts */}
        <Form.Group className="mb-3">
          <EmailBox propId={"CounsellingFormMailInput"} />
        </Form.Group>
        {/* Email input box ends */}
        {/* Mobile Number input box starts */}
        <Form.Group>
          <PhoneNumBox propId={"CounsellingFormPhInput"} />
        </Form.Group>
        {/* Mobile Number input box ends */}
      </Form>
    </Fragment>
  );
}
