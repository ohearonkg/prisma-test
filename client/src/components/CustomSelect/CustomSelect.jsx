import {
  Arrow,
  OptionWrapper,
  OptionsWrapper,
  SelectedOptionWrapper
} from "./styles";
import React, { useState } from "react";

import PropTypes from "prop-types";

const CustomSelect = ({ options, value, onChangeFunction }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (event, option) => {
    event.stopPropagation();
    onChangeFunction(option);
    setOpen(false);
  };

  const toggleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div aria-label="custom-select" onClick={() => toggleOpen()}>
      <SelectedOptionWrapper open={open}>
        {value} <Arrow />
      </SelectedOptionWrapper>
      {open && (
        <OptionsWrapper>
          {options.map((option, index) => (
            <OptionWrapper
              onClick={event => handleSelect(event, option)}
              key={index}
            >
              {option}
            </OptionWrapper>
          ))}
        </OptionsWrapper>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired
};

export default CustomSelect;
