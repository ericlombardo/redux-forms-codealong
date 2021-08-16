import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  };

  render() {
    return(
     <div>
       <form onSubmit={this.handleSubmit}>
         <p>
           <label htmlFor="input">add todo</label>
           <input id="input" onChange={this.handleInputChange} value={this.state.todo} type="text" />
         </p>
         <input type="submit" />
       </form>
     </div>
    )
  }

  handleInputChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData})
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
