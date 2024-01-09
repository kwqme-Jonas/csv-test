import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([userData]);
    XLSX.utils.book_append_sheet(wb, ws, 'UserData');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'user_data.xlsx');
  };

  return (
    <div className="App">
      <h1>User Data Export to Excel</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={exportToExcel}>
          Export to Excel
        </button>
      </form>
    </div>
  );
}

export default App;
