import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//import css
import "../styles/Instance_Services.css"

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

const Server = [
'EC2',
'RDS',
'Dynamo DB',
'IAM',
'Sequirty hub',
'Elastic cache',
'Lambda',
'Elastic benstalk',
'Load Balancer',
'ECR'
];
const Os=[
  'windows',
  'macos',
   'linux',
   'ubuntu',
]

//ec2 instance
const ec2_instance=['t2.micro-Free tier eligible',
   't2.nano']
//ec2 cpu
const ec2_vcpu=[
  '1 vcpu',
  '2 vcpu',
  '4 vcpu'
]
//ec2 storage
const ec2_storage =['75 GB NVMe SSD',
 ' 150 GB NVMe SSD',
  '5940 GB (3 * 1980 GB NVMe HDD)',
  '475 GB NVMe SSD',
  'ESB Only',]

//rds_instance
const rds_instance=[
  'db.t4g.micro',
'db.t4g.small',
'db.t4g.medium',
'db.t4g.large',
]
//red_vcpu
const rds_vcpu=[
  '2 vcpu',
  '4 vcpu',
  '8 vcpu'
]
//rds_storage
const rds_storage=[
  'General Purpose SSD (gp2) - Storage',
  'General Purpose SSD (gp3) - Storage',
  'General Purpose SSD (gp3) - IOPS',
'General Purpose SSD (gp3) - Throughput',

]
function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

  const MultipleSelect = (props)=> {
  const theme = useTheme();
//props
let {cloud}=props.cloud;

  const [server, setServer] = React.useState("");
  const [os, setOs] = React.useState("");
  const [instance, setInstance] = React.useState("");
  const [vcpu, setVcpu] = React.useState("");
  const [storage, setStorage] = React.useState("");

  //type of instance assigning
  let Instance=[]
  let Vcpu=[]
  let Storage=[]
  {if(server==='EC2'){
    Instance=ec2_instance;
    Vcpu=ec2_vcpu;
    Storage=ec2_storage
  }
 else if(server==='RDS'){
  Instance=rds_instance;
  Vcpu=rds_vcpu;
  Storage=rds_storage
 }
}
  



 

  return (
    <>
      
        <div className='container py-3 mt-5 border-primary'>
          <div className='row  d-flex flex-row justify-content-center  py-2'>
            <h3 className='text-center'>Instances And Its Configurations</h3>
            <div className='col-12 col-ms-12 col-md-12 col-lg-4 '><div className='instance '>
            <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-name-label">Server</InputLabel>
        <Select
          className='w-100'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          // multiple
          value={server}
          
          onChange={((e)=>{setServer(e.target.value)})}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Server.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select></FormControl>
        </div></div>
            
            <div className='col-12 col-ms-12 col-md-12 col-lg-4 '><div className='instance '>
            <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="os">OS</InputLabel>
        <Select
          className='w-100'
          labelId="os"
          id="demo-multiple-name"
          // multiple
          value={os}
          onChange={((e)=>{setOs(e.target.value)})}
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
          value={instance}
          onChange={((e)=>{setInstance(e.target.value)})}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Instance.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select></FormControl>
        </div></div>
          </div>

          {/* row 2 */}
          <div className='row  d-flex flex-row justify-content-center '>
            <div className='col-12 col-sm-12 col-md-12 col-xl-4 '><div className='instance w-100'>
            <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-name-label">Vcpu</InputLabel>
        <Select
          className='w-100'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          // multiple
          value={vcpu}
          onChange={((e)=>{setVcpu(e.target.value)})}
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
        </Select></FormControl>
        </div></div>
            
            <div className='col-12 col-ms-12 col-md-12 col-lg-4 '><div className='instance '>
            <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-name-label">Storage</InputLabel>
        <Select
          className='w-100'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          // multiple
          value={storage}
          onChange={((e)=>{setStorage(e.target.value)})}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Storage.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select></FormControl>
        </div></div>
            {/* <div className='col-12 col-ms-12 col-md-12 col-lg-4 '><div className='instance '>
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
        </div></div> */}
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
}
export default MultipleSelect;