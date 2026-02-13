/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { SafeAreaView } from "react-native";
import ToDoForm from "./toDoForm";
import ToDoList from "./toDoList";

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
