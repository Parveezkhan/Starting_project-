import {useState,useContext , createContext ,useEffect} from 'react';
import axios from 'axios'
import { json } from 'express';

const AuthContext = createContext();
const AuthProvider = async (children)=>{
  const [auth,setAuth]=useState({
    user:null,
    token:''
  })

  //default axios
  axios.defaults.headers.common['Authorization'] = auth?.token;

  useEffect(()=>{
    const data=localStorage.getItem('auth');
    if(data){
        const parseData=json.parse(data);
        setAuth({
            user:parseData.user,
            token:parseData.token,
        })
    }
  },[])

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

//custom hook
const useAuth=()=>useContext(AuthContext);

export {useAuth , AuthProvider};