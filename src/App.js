import './App.css';

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    sex: '',
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
    
      <div className="bg-white p-5 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Data Entry</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="border rounded px-1 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="mb-1">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={userData.age}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sex" className="mb-1">
              Sex:
            </label>
            <input
              type="text"
              id="sex"
              name="sex"
              value={userData.sex}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <button
            type="button"
            onClick={exportToExcel}
            className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600"
          >
            Export to Excel
          </button>
        </form>
      </div>
 
  );
}

export default App;
