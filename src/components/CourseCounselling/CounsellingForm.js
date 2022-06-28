import React, { Fragment } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./CounsellingForm.css";
import FormHeader from "../FormUi/FormHeader";
import EmailBox from "../FormUi/EmailBox";
import PhoneNumBox from "../FormUi/PhoneNumBox";
import CountryCodeDropdown from "../FormUi/CountryCodedropdown";
import BtnsWrapper from "../FormUi/BtnsWrapper";
import BtnCheckbox from "../FormUi/BtnCheckbox";
import BtnRadio from "../FormUi/BtnRadio";

export default function CounsellingForm() {
  return (
    <Fragment>
      <Form className="CounsellingForm p-4">
        {/* form heading starts */}
        <div className="mb-3">
          <FormHeader />
        </div>
        {/* form heading ends */}

        {/* Email id box starts */}
        <Form.Group className="mb-4">
          <EmailBox inputId={"CounsellingFormMailInput"} />
        </Form.Group>
        {/* Email id box ends */}

        {/* Mobile number box starts */}
        <Form.Group className="mb-3">
          <Row className="w-100 mx-auto">
            {/* Country code dropdown starts */}
            <Col xs={4} className="px-0">
              <CountryCodeDropdown />
            </Col>
            {/* Country code dropdown ends */}
            {/* Mobile Number input box starts */}
            <Col className="px-0 ms-3">
              <PhoneNumBox inputId={"CounsellingFormPhInput"} />
            </Col>
            {/* Mobile Number input box ends */}
          </Row>
        </Form.Group>
        {/* Mobile number box ends */}

        {/* course division starts */}
        <Form.Group className="mb-3">
          <h4 className="form-btns-div-title">Choose your course</h4>
          <BtnsWrapper>
            <BtnCheckbox inputId="btn-python" lblText="Python" inputName="courseCheckbox" />
            <BtnCheckbox inputId="btn-cprogram" lblText="C Programing" inputName="courseCheckbox" />
            <BtnCheckbox inputId="btn-dsa" lblText="Data Structures" inputName="courseCheckbox" />
            <BtnCheckbox inputId="btn-algorithm" lblText="Algorithm" inputName="courseCheckbox" />
            <BtnCheckbox
              inputId="btn-interviewprep"
              lblText="Interview Preparation"
            />
          </BtnsWrapper>
        </Form.Group>
        {/* course division ends */}

        {/* profession division starts */}
        <Form.Group className="mb-4">
          <h4 className="form-btns-div-title">Choose your profession</h4>
          <BtnsWrapper>
            <BtnRadio inputId="btn-student" lblText="Student" inputName="professionRadioBtn" />
            <BtnRadio inputId="btn-employee" lblText="Employee" inputName="professionRadioBtn" />
          </BtnsWrapper>
        </Form.Group>
        {/* profession division ends */}

        {/* submit button box starts */}
        <Form.Group>
          <Form.Control
            className="counselling-sbt-btn btn-primary bg-gradient"
            type="button"
            value="Schedule Course Counselling"
          />
        </Form.Group>
        {/* submit button box ends */}
      </Form>
    </Fragment>
  );
}
