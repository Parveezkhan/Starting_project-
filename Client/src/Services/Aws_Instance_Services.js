import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import logo from "../images/aws-logo.jpg";

//import css
import "../styles/check.css";
import "../styles/aws.css"

import { Checkbox, ListItemIcon, ListItemText } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

import Check from "./check";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const Server = [
//   "EC2",
//   "RDS",
//   "Dynamo DB",
//   "IAM",
//   "Sequirty hub",
//   "Elastic cache",
//   "Lambda",
//   "Elastic benstalk",
//   "Load Balancer",
//   "ECR",
// ];

const Os = ["windows", "macos", "linux", "ubuntu"];

//ec2 instance
const ec2_instance = ["t2.micro-Free tier eligible	1 GiB Memory 1 vCPU	ESB only	Up to 5 Gigabit" , "t2.nano	0.5 GiB Memory	1 vCPU	ESB Only	Up to 5 Gigabit"];
//ec2 cpu
const ec2_vcpu = ["1 vcpu", "2 vcpu", "4 vcpu"];
//ec2 storage
const ec2_storage = [
  "75 GB NVMe SSD",
  " 150 GB NVMe SSD",
  "5940 GB (3 * 1980 GB NVMe HDD)",
  "475 GB NVMe SSD",
  "ESB Only",
];

//rds_instance
const rds_instance = [
  "db.t4g.micro",
  "db.t4g.small",
  "db.t4g.medium",
  "db.t4g.large",
];
//red_vcpu
const rds_vcpu = ["2 vcpu", "4 vcpu", "8 vcpu"];
//rds_storage
const rds_storage = [
  "General Purpose SSD (gp2) - Storage",
  "General Purpose SSD (gp3) - Storage",
  "General Purpose SSD (gp3) - IOPS",
  "General Purpose SSD (gp3) - Throughput",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const MultipleSelect = (props) => {
  const theme = useTheme();
  //props
  let { cloud } = props.cloud;

  const [service, setService] = React.useState('');
  const [os, setOs] = React.useState("");
  const [instance, setInstance] = React.useState("");
  const [vcpu, setVcpu] = React.useState("");
  const [storage, setStorage] = React.useState("");
  const [ram,setRam]=React.useState("");

 //for running a map function
  const keys = [...Array(10).keys()];

  //dropdown instances
  const options = [
    { label: "EC2", value: "EC2" },
    { label: "RDS", value: "RDS" },
    { label: "Dynamo DB", value: "Dynamo DB" },
    { label: "IAM", value: "IAM" },
    { label: "Sequirty hub", value: "Sequirty hub" },
    { label: "Elastic cache", value: "Elastic cache" },
    { label: "Lambda", value: "Lambda" },
    { label: "Elastic benstalk", value: "Elastic benstalk" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle the checkbox change
  const handleCheckboxChange = (e, value) => {
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
      setService(value)
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    }
  };

  // Filter options based on the search query
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

//save configurations
const handleSaveConfigurations=(e)=>{
  e.preventDefault();
}


 //type of instance assigning
 let Instance = [];
 let Vcpu = [];
 let Storage = [];
 
 {
  //  console.log(selectedOptions)
   if (service === "EC2") {
     Instance = ec2_instance;
     Vcpu = ec2_vcpu;
     Storage = ec2_storage;
   } else if (service === "RDS") {
     Instance = rds_instance;
     Vcpu = rds_vcpu;
     Storage = rds_storage;
   }
 }


  return (
    <>
      <div className="container py-3 mt-5 border-primary container1">
        <div className="logo text-center my-2 ">
          <img
            src={logo}
            className="rounded-circle"
            style={{ width: "100px", height: "100px" }}
          ></img>
        </div>
        <div className="row  d-flex flex-row justify-content-center  py-2">
          <h3 className="text-center">Aws Instances And Its Configurations</h3>
          <div className="col-12 col-ms-12 col-md-12 col-lg-4 ">
            <div className="instance ">
              <FormControl sx={{ m: 1, width: 300 }}>
                {/* <InputLabel id="demo-multiple-name-label">Server</InputLabel>
                <Select
                  className="w-100"
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={server}
                  onChange={(e) => {
                    setServer(e.target.value);
                  }}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {Server.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select> */}
                <div className="dropdown-container">
                  <div
                    className="dropdown-header w-100"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Select Services ({selectedOptions.length})
                  </div>

                  {dropdownOpen && (
                    <div className="dropdown-list">
                      {/* Search Input */}
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />

                      {/* Checkboxes */}
                      <div className="checkbox-list">
                        {filteredOptions.map((option) => (
                          <label key={option.value} className="checkbox-item">
                            <input
                              type="checkbox"
                              value={option.value}
                              checked={selectedOptions.includes(option.value)}
                              onChange={(e) =>
                                handleCheckboxChange(e, option.value)
                              }
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FormControl>
            </div>
          </div>

          <div className="col-12 col-ms-12 col-md-12 col-lg-4 ">
            <div className="instance ">
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="os">OS</InputLabel>
                <Select
                  className="w-100"
                  labelId="os"
                  id="demo-multiple-name"
                  // multiple
                  value={os}
                  onChange={(e) => {
                    setOs(e.target.value);
                  }}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {Os.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      // style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-12 col-ms-12 col-md-12 col-lg-4 ">
            <div className="instance ">
              <FormControl sx={{ m: 1, width: 300 }} >
                <InputLabel id="demo-multiple-name-label">Instance</InputLabel>
                <Select
                  className="w-100"
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  // multiple
                  value={instance}
                  onChange={(e) => {
                    console.log(e)
                    setInstance(e.target.value);
                  }}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
             
                  {Instance.map((name) => (
                      <MenuItem className="menuitem"
                      key={name}
                      value={name}
                      // style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                    
                  ))} 
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        {/* row 2 */}
         <div className="row  d-flex flex-row justify-content-center ">
          <div className="col-12 col-sm-12 col-md-12 col-xl-4 ">
            <div className="instance w-100">
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Vcpu</InputLabel>
                <Select
                  className="w-100"
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  // multiple
                  value={vcpu}
                  onChange={(e) => {
                    setVcpu(e.target.value);
                  }}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {Vcpu.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      // style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="col-12 col-ms-12 col-md-12 col-lg-4 ">
            <div className="instance ">
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Storage</InputLabel>
                <Select
                  className="w-100"
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  // multiple
                  value={storage}
                  onChange={(e) => {
                    setStorage(e.target.value);
                  }}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {keys.map((key) => (
                    key !==0 && <MenuItem
                      key={key}
                      value={key*50}
                      // style={getStyles(name, personName, theme)}
                    >
                      {key*50}
                    </MenuItem>
                  
                    
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
           <div className='col-12 col-ms-12 col-md-12 col-lg-4 '><div className='instance '>
            <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-name-label">Ram</InputLabel>
        <Select
          className='w-100'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          // multiple
          value={ram}
          onChange={(e)=>setRam(e.target.value)}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {keys.map((key) => (
            key !==0 && 
            <MenuItem
              key={key}
              value={key*2}
              // style={getStyles(name, personName, theme)}
            >
              {key*2}
            </MenuItem>
          ))}
        </Select></FormControl>
        </div></div>
        </div> 
            
       
       {/* row 3 for submitting intance and its configurations */}
       <div className='row  d-flex flex-row justify-content-center m-2 text-center'>
        <form>
          <button type="submit" className="btn btn-primary" style={{width:"250px"}} onSubmit={handleSaveConfigurations}>Submit</button>
        </form>
       </div>


        {/* row -3  */}
        {/* <div className='row  d-flex flex-row justify-content-center '>
            <div className='col-12 col-ms-12 col-md-12 col-lg-4 '><div className='instance w-100'>
            <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-name-label">Instance</InputLabel>
        <Select
          className='w-100'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          // multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Instances.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select></FormControl>
        </div></div>
            
            <div className='col-12 col-ms-12 col-md-12 col-lg-4 '><div className='instance '>
            <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-name-label">Instance</InputLabel>
        <Select
          className='w-100'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          // multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Instances.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select></FormControl>
        </div></div>
            <div className='col-12 col-ms-12 col-md-12 col-lg-4 '><div className='instance '>
            <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-name-label">Instance</InputLabel>
        <Select
          className='w-100'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          // multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Instances.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select></FormControl>
        </div></div>
          </div> */}
      </div>
    </>
  );
};
export default MultipleSelect;
