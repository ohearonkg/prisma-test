import styled from "@emotion/styled";
import theme from "../../theme";

const StyledTextArea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 10px 20px;
  border: 1px solid ${theme.color.lightGrey};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  resize: none;

  &:focus {
    outline: none;
    border: 2px solid ${theme.color.blue};
    padding: 9px 19px;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-family: ${theme.font.Roboto};
`;

export { StyledTextArea, StyledLabel };
