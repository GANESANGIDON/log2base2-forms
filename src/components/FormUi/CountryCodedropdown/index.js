import React from "react";
import CountryCodesData from "./CountryCodesData.json";
import "../styles/InputBox.css";

export default function CountryCodeDropdown() {
  return (
    <div className="form-input-div">
      <select className="input-field">
        <option value="+91" selected>India (+91)</option>
        {CountryCodesData.map((data) => {
          return <option key={data.code} value = {data.dial_code}> {data.name} ({data.dial_code})</option>;
        })}
      </select>
    </div>
  );
}
