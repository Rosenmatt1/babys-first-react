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
          />
          <button>
            Add Item
          </button>
          </div>
        </form>
    )}
}

export default AddListItem



