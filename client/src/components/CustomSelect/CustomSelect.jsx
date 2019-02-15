import React, { useState } from "react";

import PropTypes from "prop-types";

const CustomSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = option => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div aria-label="custom-select" onClick={() => setOpen(true)}>
      {/* Showing the currently selected option */}
      <div>{selectedOption}</div>

      {/* Showing all options*/}
      {open && (
        <div>
          {options.map((option, index) => (
            <div onClick={() => handleSelect(option)} key={index}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CustomSelect;
