import React from 'react';
import PropTypes from 'prop-types';
import './LeftBlock.css';

const LeftBlock = ({ children }) => (
  <div className="left-block">
    {children}
  </div>
);

LeftBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LeftBlock;
