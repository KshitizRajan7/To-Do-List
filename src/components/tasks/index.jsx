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
  &:hover{
  transfrom : scale (1.2);
  transitiion : 0.2s all ease-in-out; 
`;

const Tasks = ({ taskList, deleteTask }) => {
  return (
    <TaskListContainer>
      <TaskLists>
      
        {taskList.length == '' ? "No task available" : taskList.map((task, index) => ( // mapping the added tasks and using index to use as key that requires unique identity
          <Task key={index}>    
            <Checkbox type="checkbox" />
            {task}
            <ButtonContainer>
              <DeleteButton
                onClick={() => { //using the deleteTask props that is defined in the app.jsx
                  deleteTask(index);
                }}
              >
                <RxCross2/>
              </DeleteButton>
            </ButtonContainer>
          </Task>
        ))}
      </TaskLists>
    </TaskListContainer>
  );
};

export default Tasks;
