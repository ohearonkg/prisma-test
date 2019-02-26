import { SidebarMenuItemWrapper } from "../../components/SidebarMenuItem/styles";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  display: flex;
  align-items: stretch;
  padding: 20px;
  background: #f4f4f4;
`;

const SidebarWrapper = styled.div`
  flex: 0 0 auto;
  background-color: white;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
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

const ContentWraper = styled.div`
  flex: 1 1 auto;
`;

export { PageWrapper, SidebarWrapper, ContentWraper };
