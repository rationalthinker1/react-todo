import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoListItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      index: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,

    functions: PropTypes.shape({
      addItem: PropTypes.func.isRequired,
      removeItem: PropTypes.func.isRequired,
      mark: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  removeItem(event) {
    this.props.functions.removeItem(this.props.item.index);
  }

  toggleDone(event) {
    this.props.functions.mark(this.props.item.index);
  }

  render() {
    const todoClass = this.props.item.done ? 'done' : 'undone';
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <button type="button" className="close" onClick={this.toggleDone}>
            Done?
          </button>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.removeItem}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}
