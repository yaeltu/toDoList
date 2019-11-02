import React from 'react'
import todoList from './todoList'
import TodoItem from './Components/TodoItem'
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoList : todoList
    }

    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(id){
    this.setState(function(prevState) {
      return prevState.todoList.map(todo => {
        if(todo.id == id){
          todo.completed = !todo.completed
        }
      })
    })

  }

  render(){
    const todoComponents = this.state.todoList.map(todo => 
      <TodoItem key = {todo.id} todo = {todo} handler = {this.changeHandler} /> )
      return (
        <div className = "todoList">
          <h1>My Todo List</h1>
          {todoComponents}
        </div>
      )
  }

}

export default App