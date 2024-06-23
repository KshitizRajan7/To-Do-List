import React from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";



const TaskListContainer = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const TaskLists = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
  list-style-type: none;
`;

const Task = styled.li`
  color: ${({ theme }) => theme.textPrimary};
  font-size: large;
  font-weight: 600;
  display: flex;
  margin: 10px;
`;

const Checkbox = styled.input`
  font-size: large;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-right: 10px;
`;
const UpdateButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

const DeleteButton = styled.button`
  color: ${({ theme }) => theme.textPrimary};
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover{
  transform : scale(1.2);
  transition : 0.2s all ease-in-out; 
`;

const Tasks = ({ taskList, deleteTask, searchQuery }) => {
  const filteredTasks = taskList.filter((task) =>
    task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TaskListContainer>
      <TaskLists>  
      {filteredTasks.length === 0 ? 
        "No tasks found"
       : (
        filteredTasks.map((task, index) => (
          <Task key={index}>
            <Checkbox type="checkbox" />
            {task}
            <ButtonContainer>
              <DeleteButton
                onClick={() => {
                  deleteTask(index);
                }}
              >
                <RxCross2 />
              </DeleteButton>
            </ButtonContainer>
          </Task>
        ))
      )}
      </TaskLists>
    </TaskListContainer>
  );
};

export default Tasks;
