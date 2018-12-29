import React from 'react'
import '../App.css'

class AddListItem extends React.Component {

  render() {

    return (
        <form onSubmit= {this.props.addItem}>
          <div className="form-group">
          Add a To Do to your list here
          <input 
            onChange= {this.props.updateToDo}
            className="form-control"
            type="text"
            placeholder="Add To Do Here"
            required
          />
          Due Date
          <input 
            onChange= {this.props.updateDueDate}
            className="form-control"
            type="text"
            placeholder="Month/Day/Year"
            required
          />
          Priority
          <input 
            onChange= {this.props.updatePriority}
            className="form-control"
            type="number"
            placeholder="Input value between 0 and 10"
            required
          />
          <button>
            Add Item
          </button>
          </div>
        </form>
    )}
}

export default AddListItem



