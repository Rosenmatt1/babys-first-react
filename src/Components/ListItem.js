import React from 'react'

class ListItem extends React.Component {

  render() {

    return (
      <li
      className={this.props.completed === true ? "completed" : "incomplete"}
      >
        Task: {this.props.task} , 
        Due: {this.props.due} , 
        Priority: {this.props.priority}
      <label>  &nbsp; &nbsp; &nbsp; Check Box when Complete</label>
      <input 
      type="checkbox"
      value={this.props.id}
      onChange={this.props.completedTask}
      className="mx-3"
      />
      <button 
      onClick={() => this.props.removeTask(this.props)}
      className="mx-3"
      >
      Click to Remove
      </button>
      </li>
    )}
}

export default ListItem