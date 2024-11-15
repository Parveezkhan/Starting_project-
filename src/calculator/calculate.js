// Dropdowns.js
import React, { useState } from "react";
import "../styles/calc.css"; // Importing CSS for styling
import Navbar from '../Layout/Navbar';


const Dropdowns = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: "",
    dropdown2: "",
    dropdown3: "",
  });

  // Handle change for each dropdown
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: value,
    });
  };

  return (
    <>
    <Navbar/>
    <div className="dropdown-container">
      <div className="dropdown">
        <label htmlFor="dropdown1">Select Day</label>
        <select
          name="days"
          id="dropdown1"
          value={selectedOptions.dropdown1}
          onChange={handleChange}
        >
          <option value="">Select Day</option>
          <option value="Full Day">Full Day</option>
          <option value="Half Day">Half Day</option>
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="dropdown2">Select Ram</label>
        <select
          name="Ram"
          id="dropdown2"
          value={selectedOptions.dropdown2}
          onChange={handleChange}
        >
          <option value="">Select Ram</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="dropdown3">Select Cpu</label>
        <select
          name="cpu"
          id="dropdown3"
          value={selectedOptions.dropdown3}
          onChange={handleChange}
        >
          <option value="">Select cpu</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="dropdown3">Select Storage</label>
        <select
          name="storage"
          id="dropdown3"
          value={selectedOptions.dropdown3}
          onChange={handleChange}
        >
          <option value="">Select Storage</option>
          <option value="50"> 50</option>
          <option value="100"> 100</option>
          <option value="150"> 150</option>
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="dropdown3">Select Cpu</label>
        <select
          name="cpu"
          id="dropdown3"
          value={selectedOptions.dropdown3}
          onChange={handleChange}
        >
          <option value="">Select cpu</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
        </select>
      </div>

      
    </div></>
    
  );
};

export default Dropdowns;
