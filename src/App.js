import './App.css';

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function App() {
  /*const [userData, setUserData] = useState({
    date: '',
    region: '',
    contractor: '',
    welder: '',
    cap_positive: '',
    cap_negative: '',
    district: '',
    town: '',
    adhesive: '',
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
  };*/

  const [formData, setFormData] = useState({
    date: '',
    region: '',
    contractor: '',
    welder: '',
    cap_positive: '',
    cap_negative: '',
    district: '',
    town: '',
    adhesive: '',
    // Add other form fields as needed
});

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            // Handle the result as needed
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

  return (
      <div className="bg-white">
       <h1 className="text-xl font-bold text-start bg-slate-500 px-2 py-2 text-white shadow-lg">
      Data Entry
    </h1>
        <h1 className="text-2xl font-bold  p-4 text-start mt-4 text-blue-400">Expirement Set Up</h1>
        <form className="space-y-4 grid grid-cols-3 gap-4 p-4">
          <div className="flex flex-col p-4">
            <label htmlFor="date" className="font-bold mb-1">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="font-bold mb-1">
              Region:
            </label>
            <input
              type="text"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold mb-1">
              Contractor:
            </label>
            <input
              type="text"
              id="contractor"
              name="contractor"
              value={formData.contractor}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold mb-1">
              Welder:
            </label>
            <input
              type="text"
              id="welder"
              name="welder"
              value={formData.welder}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="text" className="font-bold mb-1">
              Cap Positive:
            </label>
            <input
              type="text"
              id="cap_positive"
              name="cap_positive"
              value={formData.cap_positive}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="font-bold mb-1">
              Cap Negative:
            </label>
            <input
              type="text"
              id="cap_negative"
              name="cap_negative"
              value={formData.cap_negative}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="font-bold mb-1">
              District:
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="font-bold mb-1">
              Town:
            </label>
            <input
              type="text"
              id="town"
              name="town"
              value={formData.town}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="font-bold mb-1">
              Adhesive:
            </label>
            <input
              type="text"
              id="adhesive"
              name="adhesive"
              value={formData.adhesive}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
        </form>
        <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 m-8"
          >
            Export to Excel
          </button>
      </div>

  );
}

export default App;
