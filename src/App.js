import React from 'react';

import Menu from './Components/Menu';
import LeftBlock from './Components/LeftBlock';

import './App.css';

const App = ({ children }) => [
  <Menu key="navigation" />,
  <LeftBlock key="left-block">
    {children}
  </LeftBlock>,
];


export default App;