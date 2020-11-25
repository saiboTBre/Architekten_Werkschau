import React, { Fragment } from 'react';
import Main from './components/Main/Main';

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;
