import styled from "@emotion/styled";

const SidebarMenuItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: red;
  }
`;

const IconWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

export { SidebarMenuItemWrapper, IconWrapper, StyledText };
