import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./themes/themes";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Tasks from "./components/tasks";
import Add from "./components/Add";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;
const Container = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const getLocalItem = () => {
  let list = localStorage.getItem("lists"); //storing the list of tasks in the localstorage so that it wont get erased in every re renders.
  if (list) {
    return JSON.parse(localStorage.getItem("lists")); //using the same lines of code instead of list for clarity.
  } else {
    return [];
  }
};

const App = () => {
  const [taskList, setTaskList] = useState(getLocalItem()); //initializing the tasklist with the local items (array)
  const [currentTheme, setCurrentTheme] = useState(darkMode); //initializing with darkmode

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = `https://jsonplaceholder.typicode.com/todos`;
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('response is ok');
  //       }
  //       const data = await response.json();
  //       setTasks(data); // Store fetched data in state
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData(); // Call fetchData when component mounts
  // }, []);

  useEffect(() => { //useEffect with taskList dependency, works when changes occurs in it
    localStorage.setItem("lists", JSON.stringify(taskList)); //converting the js object (tasklist) in JSON string to store the data in local storage.
  }, [taskList]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkMode ? lightMode : darkMode); //handling the dark mode and light mode css.
  };

  const deleteTask = (index) => {
    let copyTask = [...taskList];
    copyTask.splice(index, 1); // removing the selected tasks, according the index i.e key of the element
    setTaskList(copyTask);
  };

  const addTask = (task) => {
    setTaskList([...taskList, task]); //adding task in the tasklist, the task is being retrieved from AddModal.jsx
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Body>
        <Container>
          <Header />
          <Search toggleTheme={toggleTheme} />
          <Tasks taskList={taskList} deleteTask={deleteTask} />
          <Add addTask={addTask} />
        </Container>
      </Body>
    </ThemeProvider>
  );
};

export default App;
