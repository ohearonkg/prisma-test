import React, { useState } from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";

const SelectedOptionWrapper = styled.div`
  cursor: pointer;
`;

const OptionsWrapper = styled.div`
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const OptionWrapper = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

const CustomSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (event, option) => {
    event.stopPropagation();
    setSelectedOption(option);
    setOpen(false);
  };

  const toggleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div aria-label="custom-select" onClick={() => toggleOpen()}>
      <SelectedOptionWrapper>{selectedOption}</SelectedOptionWrapper>
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CustomSelect;
