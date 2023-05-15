import React, { useEffect, useState } from 'react'
import Tabela from './tabela';
import Axios from 'axios';

function Table() {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    try{
      const res = await Axios.get("http://localhost:3001/getInfo");
      console.log(res.data)
      setUsers(res.data)
    }catch(error){
      console.log(error);
    }
  }
  console.log(users);

  useEffect(()=>{
    localStorage.setItem('contador', 0)
    getUsers();
  }, [setUsers]);



  return (
    <div>
      <Tabela users = {users}/>
    </div>
  );
}

export default Table;
