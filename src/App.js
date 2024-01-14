import './App.css';
/*import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SubmitForm from './components/submitForm';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/submitForm" component={SubmitForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
