import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todoListItem';
import TodoForm from './todoForm';

export default class TodoList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
      }),
    ).isRequired,

    functions: PropTypes.shape({
      addItem: PropTypes.func.isRequired,
      removeItem: PropTypes.func.isRequired,
      mark: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items.map((item, index) => (
      <TodoListItem key={index} item={item} functions={this.props.functions} />
    ));

    return (
      <div>
        <TodoForm functions={this.props.functions} />
        <ul className="list-group">{items}</ul>
      </div>
    );
  }
}
