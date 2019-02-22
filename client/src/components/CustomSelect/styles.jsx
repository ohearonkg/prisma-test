import styled from "@emotion/styled";

const SelectedOptionWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  border-bottom: ${props =>
    props.open ? "2px solid #0b5fff" : "1px solid rgba(0, 0, 0, 0.42)"};
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-bottom: 2px solid #0b5fff;
  }
`;

const Arrow = styled.div`
  width: 0px;
  height: 0px;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  border-top: 7.5px solid rgba(0, 0, 0, 0.42);
`;

const OptionsWrapper = styled.div`
  font-family: "Roboto", sans-serif;
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

export { SelectedOptionWrapper, Arrow, OptionsWrapper, OptionWrapper };
