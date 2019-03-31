import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoForm extends Component {
  static propTypes = {
    functions: PropTypes.shape({
      addItem: PropTypes.func.isRequired,
      removeItem: PropTypes.func,
      mark: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const value = this.refs.itemName.value;

    if (value) {
      this.props.functions.addItem(value);
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          ref="itemName"
          className="form-control"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}
