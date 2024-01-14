import './App.css';

import React, { useState } from 'react';
/*import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SubmitForm from './components/submitForm';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/submit-form" component={SubmitForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
