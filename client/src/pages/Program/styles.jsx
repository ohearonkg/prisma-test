import styled from "@emotion/styled";

const ExerciseList = styled.ol`
  list-style: none;
  margin: 0;
`;

const ExerciseRow = styled.li`
  display: flex;
  align-items: stretch;
`;

const ExerciseName = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
`;

export { ExerciseList, ExerciseRow, ExerciseName };
