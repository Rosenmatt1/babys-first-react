import React from 'react'
import ListItem from './ListItem.js'

class List extends React.Component {

  render() {

    return(
      <ul>
        {this.props.todos.map((todo) => {
          return <ListItem 
          key={todo.id} 
          id={todo.id}
          completed={todo.completed}
          task={todo.task} 
          due={todo.due}
          prioroty={todo.priority}
          completedTask={this.props.completedTask}
          />
        })}
      </ul>
    )}
}

export default List