import React, { Component } from 'react';
import List from './Components/List.js'
import AddListItem from './Components/AddListItem.js'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todos: [],
      newTodo: ""
    }
  }

 fetchTodoList = () => {
  return fetch('https://galvanize-todos-api.herokuapp.com/')
  .then(res => res.json())
  .then(todos => {
    this.setState({todos: todos})
      return todos
    })
  }

  componentDidMount() {
    this.fetchTodoList()
      .catch(err => console.error(err))
  }

  updateToDo = e => {
    this.setState({
      newTodo: e.target.value
    })
  }

  addItem = e => {
    e.preventDefault()
    let task = {
      task: this.state.newTodo
    }
    this.setState({
      todos: [...this.state.todos, task]
    })
  }

  completedTask = (e) => {
    let convert = Number(e.target.value)
    let checked = this.state.todos.filter(item => {
      return item.id === convert
    })
    if (checked[0].completed == true) {
      checked[0].completed = false
    } else {
      checked[0].completed = true
    }
    this.setState({
      todos: this.state.todos
    })
   
    
  }

  render() {
    return (
      <div>
        <AddListItem 
          addItem = {this.addItem}
          updateToDo = {this.updateToDo}
        />
        <List 
          todos = {this.state.todos}
          completedTask = {this.completedTask}
        />
      </div>
      )}
}

export default App
