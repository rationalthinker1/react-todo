import React from 'react';
import PropTypes from 'prop-types';

const TodoHeader = ({ title }) => (
  <div>
    <h1>{title || 'Jello'}!!</h1>
    <h3>Smaller header</h3>
  </div>
);

TodoHeader.propTypes = {
  title: PropTypes.number,
};

export default TodoHeader;
