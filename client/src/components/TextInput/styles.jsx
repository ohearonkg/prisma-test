import styled from "@emotion/styled";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 20px;
  border: 1px solid #c4c4c4;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 2px solid #0b5fff;
    padding: 9px 19px;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-family: "Roboto", sans-serif;
`;

export { StyledInput, StyledLabel };
