import { SidebarMenuItemWrapper } from "../SidebarMenuItem/styles";
import styled from "@emotion/styled";

const SidebarWrapper = styled.div`
  flex: 0 0 auto;
  background-color: white;
  box-shadow: -3px 3px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 100px;

  & ${SidebarMenuItemWrapper} {
    padding-top: 20px;

    &:last-child {
      padding-bottom: 20px;
    }
  }
`;

export { SidebarWrapper };
