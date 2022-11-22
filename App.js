import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import  {Todos} from "./Mycomponents/Todos";
import React, { useState, useEffect } from 'react';
import {AddToDo} from "./Mycomponents/AddToDo";
import {Footer} from "./Mycomponents/Footer";
import{ About } from "./Mycomponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";


function App() {
   const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
setTodos(todos.filter((e)=>{
  return e!==todo;
  }));
}
const addTodo=(title,desc)=>{
  console.log("I am adding this todo",title,desc)
  let sno;
  if(todos.length===0){
    sno=0;
  }
  else{
    sno=todos[todos.length-1].sno+1;
  }
  const myTodo={
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
}
  const [todos, setTodos]= useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go the market to get this job done1"
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"You need to go the mall to get this job done2"
    },
    {
      sno:3,
      title:"Go to the park",
      desc:"You need to go the park to get this exercise done3"
    }
  ]);
  return (
    <>
    <Router>
    <Header title="My Todos List" searchBar={false}/>
    <Switch>
    <Route exact path="/" render={()=>{
      return(
      <>
      <AddToDo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    </>)
    }}>
            
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
