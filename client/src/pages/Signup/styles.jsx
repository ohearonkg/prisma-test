import styled from "@emotion/styled";

const PageHeadingWrapper = styled.div`
  text-align: center;
  padding-bottom: 15px;
`;

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;

  & label {
    padding-top: 20px;
  }

  & button {
    margin-top: 20px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export { PageHeadingWrapper, StyledForm };
