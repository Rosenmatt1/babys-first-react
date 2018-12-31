import React, { Component } from 'react';
import List from './Components/List.js'
import AddListItem from './Components/AddListItem.js'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todos: [],
      newTodo: "",
      completed: false, 
      due: "",
      priority: 1,
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

  updateDueDate = e => {
    this.setState({
      due: e.target.value
    })
  }

  updatePriority = e => {
    this.setState({
      priority: e.target.value
    })
  }

  addItem = e => {
    e.preventDefault()
    let task = {
      task: this.state.newTodo,
      due: this.state.due,
      priority: this.state.priority,
      completed: this.state.completed,
      id: this.state.todos.length + 1
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
    checked[0].completed === true ? checked[0].completed = false : checked[0].completed = true
    this.setState({
      todos: this.state.todos
    })  
  }

  removeTask = (index) => {
    const removeToDo = this.state.todos.filter((todo) => index.id !== todo.id)
    //return everything else
   
    this.setState({ 
      todos: removeToDo
    })
  }

  render() {
    return (
      <div>
        <AddListItem 
          addItem = {this.addItem}
          updateToDo = {this.updateToDo}
          updateDueDate = {this.updateDueDate}
          updatePriority = {this.updatePriority}
        />
        <List 
          todos = {this.state.todos}
          completedTask = {this.completedTask}
          removeTask = {this.removeTask}
        />
      </div>
      )}
}

export default App
