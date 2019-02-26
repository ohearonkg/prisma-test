import styled from "@emotion/styled";
import theme from "../../theme";

const StyledCard = styled.div`
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  padding: 20px;
  min-width: 275px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: #ffffff;
  font-family: ${theme.font.Roboto};
`;

export { StyledCard };
