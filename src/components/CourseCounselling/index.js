import React from "react";
import { Row } from "react-bootstrap";
import CounsellingForm from "./CounsellingForm";
export default function CourseCounselling() {
  const CourseCounsellingStyle = {
    minHeight: "100vh",
    background: "url('images/background.svg') no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      className="CourseCounselling w-100 py-5 d-flex align-items-center"
      style={CourseCounsellingStyle}
    >
      <Row className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
        <CounsellingForm />
      </Row>
    </div>
  );
}
