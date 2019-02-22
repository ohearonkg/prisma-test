import gql from "graphql-tag";

export const GET_PROGRAM_QUERY = gql`
  query GET_PROGRAM_QUERY($programID: String!) {
    program(programID: $programID) {
      id
      name
      exercises {
        id
        name
        description
      }
    }
  }
`;
