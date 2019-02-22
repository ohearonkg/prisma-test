import styled from "@emotion/styled";

const PageHeadingWrapper = styled.div`
  text-align: center;
  padding-bottom: 25px;
`;

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;

  & input[type="text"] {
    margin-bottom: 20px;
  }
`;

export { PageHeadingWrapper, FormWrapper };
