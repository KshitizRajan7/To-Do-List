import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgb(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  width: 30vw;
  position: fixed;
  padding: 1.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  max-width: 100rem;
  height: 30vh;
  
  @media screen and (max-width: 1020px){
width: 25vw;
 padding: 1rem 1rem;
 top: 50%;
  left: 50%;
  }

   @media screen and (max-width: 480px){
    width: 20vw;
     padding: 0.8rem 0.8rem;
     top: 50%;
  left: 50%;
  }
   @media screen and (max-width: 240px){
width: 30vw;
 padding: 1.5rem 1.5rem;
 top: 50%;
  left: 50%;
  }

  
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
  line-height: 30px;
`;

const InputForm = styled.form`
  position: relative;
  width: 100%;
  height: 26vh;
  padding: 1px 5px;
  @media screen and (max-width: 1020px){
      width: 100%;
  height: 20vh;
  }

   @media screen and (max-width: 480px){
    width: 60%;
  height: 15vh;
  }
   @media screen and (max-width: 240px){
    width: 40%;
  height: 10vh;
  }

`;

const InputContainer = styled.div`

`;

const NoteInput = styled.input`
  width: 100%;
  border-radius: 5px;

  @media screen and (max-width: 1020px){
    width:100%;
    
  }

   @media screen and (max-width: 480px){
    width:80%;
    height:
  }
   @media screen and (max-width: 240px){
    width:40%;
  }

`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 12vh;
  gap: 200px;
  position: relative;
`;

const CancelButton = styled.button`
  width: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  cursor:pointer;
    &:hover{
    transform: scale(1.2);
    transition: 0.2s all ease-in-out;
   }

  @media screen and (max-width: 1020px){
    width:30%;
  }

   @media screen and (max-width: 480px){
    width:40px;
  }
   @media screen and (max-width: 240px){
    width:10px;
  }

`;

const ApplyButton = styled.button`
  width: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 5px;
  cursor : pointer;

  &:hover{
    transform: scale(1.2);
    transition: 0.2s all ease-in-out;
   }

  @media screen and (max-width: 1020px){
    width:30%;
  }

   @media screen and (max-width: 480px){
    width:40px;
  }
   @media screen and (max-width: 240px){
    width:10px;
  }


`;

const AddModal = ({ closeModal, addTask }) => {
  //props used by using grounding method
  const [task, setTask] = useState(""); //initializing the state as '' for avoiding being null or undefined
  const AddTask = (e) => {
    e.preventDefault(); //preventing the rerendering of the form and data being disappeared.

    {task == '' ? alert('Fill the form with your task.'):addTask(task)} // this will pass the tasks to the [...setAddTask,task] that is using spread Operator in App.jsx.
    setTask(""); //sets the input box empty for immediate another use
  };

  return (
    <div>
      <Wrapper
        onClick={() => {
          closeModal(); //closes the form when clicking anywhere in the blurr area.
        }}
      />
      <Modal>
        <Title>NOTE</Title>
        <InputForm>
          <InputContainer>
            <NoteInput
              type="text"
              value={task} //will make the react know about the data being entered in the textarea
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your note.."
            />
          </InputContainer>
          <ButtonContainer>
            <CancelButton
              onClick={() => {
                closeModal();
              }}
            >
              CANCEL
            </CancelButton>
            <ApplyButton onClick={AddTask}>APPLY</ApplyButton>
          </ButtonContainer>
        </InputForm>
      </Modal>
    </div>
  );
};

export default AddModal;
