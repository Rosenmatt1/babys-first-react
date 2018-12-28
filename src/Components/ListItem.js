import React from 'react'


class ListItem extends React.Component {

  render() {

    return (
      <li
      className={this.props.completed === true ? "completed" : "incomplete"}
      >
        Task: {this.props.task}   
        Due: {this.props.due}     
        Priority: {this.props.prioroty}
      <input 
      type="checkbox"
      value={this.props.id}
      onChange={this.props.completedTask}
      />
      </li>
    )
  }
}

export default ListItem