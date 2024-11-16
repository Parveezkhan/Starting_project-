// Dropdowns.js
import React, { useState } from "react";
import "../styles/calc.css"; // Importing CSS for styling
import Navbar from '../Layout/Navbar';


const Dropdowns = () => {
  const [configurations, setConfigurations] = useState({
    day: "",
    ram: 0,
    cpu: 0,
    storage: 0,
    access_type: "",
    public_ip: 0,
    lab_setup: "",
    no_of_servers: 0,
    no_of_days: 0,

  });
  const [servercost_day, setServercost_day] = useState(0);
  const [labsetupcost, setLabsetupcost] = useState(0);
  const [ipcharges, setIpcharges] = useState(0)
  const [servercost, setServercost] = useState(0)
  console.log(typeof servercost_day)
  // Handle change for each dropdown
  const handleChange = (e) => {
    setConfigurations(
      { ...configurations, [e.target.name]: e.target.value }
    )


  };
let ram=7.5;
let cpu=40;
let ssd=0.25;
let public_ip_charges=1500;
let lab_setup_cost={
  'https':0,
  'Intermidiate':4000,
  'Security Lab':8000,
  'Advaced Lab':10000,
  'Infrastructure Lab':12000,
}
const [sc,setSc]=useState(0);
  const calculateCost=()=>{
    //server per day calculation
    let server_day_charges=Math.ceil(Number(configurations.ram)*ram+Number(configurations.cpu)*cpu+Number(configurations.storage)*ssd);
     {(configurations.day==='Half Day') ? (server_day_charges=server_day_charges-(server_day_charges*0.3)) : server_day_charges=server_day_charges }

     //lab setup charges
    //  let lab_setup_charges = lab_setup_cost.configurations.
  }
  calculateCost();
  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid p-3 bg-light">
          <div className="row p-4 h6">
            <div className="col-sm-12 col-md-6 col-lg-6 col-12 d-flex justify-content-between flex-row flex-wrap border border-4 border-info p-4 rounded my-2">
              <div className="row w-100 ">
                <form className="d-flex flex-row flex-wrap w-100">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-12 w-40 px-2">
                    <div className="dropdown ">
                      <label htmlFor="dropdown1">Select Day</label>
                      <select
                        name="day"
                        id="dropdown1"
                        value={configurations.day}
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
                        name="ram"
                        id="dropdown2"
                        value={configurations.ram}
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
                        value={configurations.cpu}
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
                        value={configurations.storage}
                        onChange={handleChange}
                      >
                        <option value="">Select Storage</option>
                        <option value="50"> 50</option>
                        <option value="100"> 100</option>
                        <option value="150"> 150</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-12 w-40 px-2  ">
                    <div className="dropdown ">
                      <label htmlFor="dropdown4">Select AccessType</label>
                      <select
                        name="access_type"
                        id="dropdown3"
                        value={configurations.access_type}
                        onChange={handleChange}
                      >
                        <option value="">Select AccessType</option>
                        <option value="Https"> Https</option>
                        <option value="RDP"> RDP</option>
                        <option value="VNC"> VNC</option>
                        <option value="VPN"> VPN</option>
                        <option value="Public Ip"> Public Ip</option>
                      </select>
                    </div>

                    <div className="dropdown">
                      <label htmlFor="dropdown5">Select Public Ip</label>
                      <select
                        name="public_ip"
                        id="dropdown3"
                        value={configurations.public_ip}
                        onChange={handleChange}
                      >
                        <option value="">Select Public Ip</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                      </select>
                    </div>

                    <div className="dropdown">
                      <label htmlFor="dropdown6">Select Lab Type</label>
                      <select
                        name="lab_setup"
                        id="dropdown3"
                        value={configurations.lab_setup}
                        onChange={handleChange}
                      >
                        <option value="">Select Lab Type</option>
                        <option value="Basic"> Basic</option>
                        <option value="Intermediate"> Intermediate</option>
                        <option value="Seurity"> Seurity</option>
                        <option value="Advanced Labs"> Advanced Labs</option>
                        <option value="Infrastructure Labs"> Infrastructure Labs</option>
                      </select>
                    </div>



                    <div className="dropdown">
                      <label htmlFor="dropdown7">Select No of servers</label>
                      <select
                        name="no_of_servers"
                        id="dropdown3"
                        value={configurations.no_of_servers}
                        onChange={handleChange}
                      >
                        <option value="">Select No of servers</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                      </select>
                    </div>

                    <div className="dropdown my-10">
                      <label htmlFor="dropdown8 ">Select No of days</label>
                      <select
                        name="no_of_days"
                        id="dropdown8"
                        value={configurations.no_of_days}
                        onChange={handleChange}
                      >
                        <option value="">Select No of days</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                      </select>
                    </div>
                    <div ><button type="submit" className="btn btn-primary mt-2">Submit</button></div>
                  </div>


                </form>
              </div>





            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-12 p-4 d-flex justify-content-center ">
              <div className="input_data w-50 p-3  h6 border border-4 rounded border-info h-100">
                <form>
                  <div className="form-group m-2">
                    <label for="server_cost">Enter Server Cost/Day</label>
                    <input type="Number" className="form-control" id="server_cost" placeholder="Enter cost" onChange={async (e)=>{await setServercost_day(e.target.value)
                    }
                    } />
                  </div>
                  <div className="form-group m-2">
                    <label for="setup_cost">Enter Setup Cost</label>
                    <input type="number" className="form-control" id="setup_cost" placeholder="Setup Cost" onChange={async (e)=>{await setLabsetupcost(e.target.value)}}/>
                  </div>
                  <div className="form-group m-2">
                    <label for="public_ip">Enter Public Ip Setup Cost</label>
                    <input type="number" className="form-control" id="public_ip" placeholder="public Ip Cost" onChange={async (e)=>{await setIpcharges(e.target.value)}}/>
                  </div>
                  <div className="form-group m-2">
                    <label for="server_cost">Enter Server Cost</label>
                    <input type="number" className="form-control" id="server_cost" placeholder="Server Cost"  onChange={async (e)=>{await setServercost(e.target.value)}}/>
                  </div>
                  <div className="text-center my-4"><button type="submit " className="btn btn-primary w-100">Total Cost</button></div>


                </form><h2 className="text-center my-2">Total cost:$50</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Dropdowns;
