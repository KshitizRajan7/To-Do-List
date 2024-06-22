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
  @media screen and (max-width: 1020px) {
    width: 100%;
    height: 27%;
  }

  @media screen and (max-width: 720px) {
    width: 80%;
    height: 25%;
  }

  @media screen and (max-width: 480px) {
    width: 60%;
    height: 22%;
  }
  @media screen and (max-width: 240px) {
    width: 40%;
    height: 20%;
  }
`;

const Addbutton = styled.button`
  width: 4rem;
  height: 4rem;
  margin-right: 20px;
  border: none;
  background: purple;
  border-radius: 50%;
  cursor: pointer;
     &:hover{
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
   }
  @media screen and (max-width: 1020px) {
    width: 3rem;
    height: 3rem;
    margin-right: 10px;
  }

  @media screen and (max-width: 720px) {
    width: 2rem;
    height: 2rem;
    margin-right: -50px;
  }

  @media screen and (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: -70px;
  }
  @media screen and (max-width: 240px) {
   width: 1rem;
    height: 1rem;
    margin-right: -80px;
  }
`;

const PlusIcon = styled(GrAdd)`
  font-size: 20px;
  color: white;
  @media screen and (max-width: 1020px) {
    font-size: 20px;
  }

  @media screen and (max-width: 720px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
font-size: 10px;
  }
  @media screen and (max-width: 240px) {
   font-size: 5px;
  }
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
