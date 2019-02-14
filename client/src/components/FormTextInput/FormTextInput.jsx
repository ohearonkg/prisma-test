import React, { useState } from "react";

import PropTypes from "prop-types";

const FormTextInput = ({ placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <input placeholder={placeholder} value={value} onChange={handleChange} />
  );
};

FormTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default FormTextInput;
