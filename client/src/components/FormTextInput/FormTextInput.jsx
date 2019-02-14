import PropTypes from "prop-types";
import React from "react";

const FormTextInput = ({ label }) => (
  <>
    <label htmlFor={label} aria-labelledby={label}>
      {label}
    </label>
    <input label={label} id={label} />
  </>
);

FormTextInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default FormTextInput;
