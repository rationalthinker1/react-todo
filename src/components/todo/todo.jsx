import React, { Component } from 'react';
import TodoHeader from './todoHeader';
import TodoList from './todoList';
import style from './todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.mark = this.mark.bind(this);

    this.functions = {
      addItem: this.addItem,
      removeItem: this.removeItem,
      mark: this.mark,
    };

    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    this.addItem('learn react');
    this.addItem('learn react2');
  }

  addItem(item) {
    const items = this.state.items;
    items.push({
      index: items.length + 1,
      value: item,
      done: false,
    });
    this.setState({ items });
  }

  removeItem(itemIndex) {
    const items = this.state.items.filter(item => item.index !== itemIndex);
    this.setState({ items });
  }

  mark(itemIndex) {
    const items = this.state.items.map(item => {
      if (item.index == itemIndex) {
        item.done = !item.done;
      }

      return item;
    });
    this.setState({ items });
  }

  render() {
    return (
      <div style={style}>
        <TodoHeader title="Hello world from TodoComponent!" />
        <TodoList items={this.state.items} functions={this.functions} />
      </div>
    );
  }
}
