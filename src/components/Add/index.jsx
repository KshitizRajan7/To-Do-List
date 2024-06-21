import React, { useState } from "react";
import styled from "styled-components";
import { GrAdd } from "react-icons/gr";
import AddModal from "../Addmodal";

//using styled-component for styling accordingly

const AddContainer = styled.div`
  width: 100%;
  height: 27%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Addbutton = styled.button`
  width: 4rem;
  height: 4rem;
  margin-right: 20px;
  border: none;
  background: purple;
  border-radius: 50%;
  cursor: pointer;
`;

const PlusIcon = styled(GrAdd)`
  font-size: 20px;
  color: white;
`;

const Add = ({ addTask }) => {
  const [showAdd, setshowAdd] = useState(false); // initializing a state for making the modal of adding task visible only onClick event.
  const closeModal = () => { 
    setshowAdd(false); //the false state wont make it visible.
  };
  return (
    <AddContainer>
      <Addbutton
        onClick={() => {
          setshowAdd(true); //this onClick event will make the addModal visible on the screen with the blur background.
        }} 
      >
        <PlusIcon />
      </Addbutton> 
      {showAdd && <AddModal addTask={addTask} closeModal={closeModal} />} 
    </AddContainer> // by using && operator  the Addmodal container will be visible only if the showAdd is true.
  );
};

export default Add;
