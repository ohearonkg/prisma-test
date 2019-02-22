import styled from "@emotion/styled";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: ${props => (props.error ? "9px 19px" : "10px 20px")};
  border: ${props => (props.error ? "2px solid #f44336" : "1px solid #c4c4c4")};
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &:focus {
    outline: none;
    border: ${props =>
      props.error ? "2px solid #f44336" : "2px solid #0b5fff"};
    padding: 9px 19px;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
`;

const ErrorTextWrapper = styled.div`
  transition: all 2s ease-in-out;
  max-height: ${props => (props.error ? "none" : "0px")};
  overflow: hidden;
`;

const ErrorText = styled.span`
  font-size: 13px;
  color: #f44336;
`;

export { StyledInput, StyledLabel, ErrorTextWrapper, ErrorText };
