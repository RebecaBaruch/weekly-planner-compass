import styled from "styled-components";

export const TasksList = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
  width: 95.5vw;
  height: 50vh;

  &::-webkit-scrollbar {
    padding: 4px;

    background: #ffffff;

    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 22px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ffffff;

    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 22px;
  }

  &::-webkit-scrollbar-thumb {
    background: #636363;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-corner {
    visibility: hidden;
  }
`;