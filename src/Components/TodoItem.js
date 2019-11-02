import React from 'react'
import './todoItem.css'

class TodoItem extends React.Component{

    render(){
        const completedStyle = {
            color: "gray",
            fontStyle: "italic",
            textDecoration: "line-through"
        }
        
        return(
            <div className = "todoItem">
                <input type = "checkbox"
                checked = {this.props.todo.completed} 
                onChange = {event => this.props.handler(this.props.todo.id)}
                />
                <h2 style = {this.props.todo.completed ? completedStyle : null}>{this.props.todo.title}</h2>

            </div>
        )
    }
}

export default TodoItem