import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import axios from 'axios';

function Dashboard() {

  const chartRef = useRef();

  useEffect(() => {
        axios.get('http://localhost:3001/userAtivo',{

        }).then((response)=>{
            const userAtivo = response.data.userStatus
            console.log(userAtivo);
            //const userInativo = response.data.userInativo
            localStorage.setItem('userAtivo', userAtivo)
            //localStorage.setItem('userInativo', userInativo)
        })
        axios.get('http://localhost:3001/userInativo',{

        }).then((response)=>{
            //const userAtivo = response.data.userAtivo
            const userInativo = response.data.userStatus
            console.log(userInativo);
            //localStorage.setItem('userAtivo', userAtivo)
            localStorage.setItem('userInativo', userInativo)
        })

    const chart = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: ['Ativos', 'Inativos'],
        datasets: [{
          data: [localStorage.getItem('userAtivo'), localStorage.getItem('userInativo')],
          backgroundColor: ['#36A2EB', '#FF6384'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        width: 100,
        height: 100
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <>
      <Navbar/>
      <div className='mx-5'>
        <div className='row text-center mt-5 text-primary'>
          <h3 style={{ color: '#FF6B00'}}>Dashboard</h3>
        </div>   

        <div className='row text-center mt-5'>
          <h6>Gráfico referente ao número de usuários Ativos e Inativos</h6>
        </div>

        <div className='row text-center mt-5' style={{ color: '#FF6B00', width: '50' }}>
            <canvas ref={chartRef} style={{ width: '40%', height: '40%' }}></canvas>
        </div>

      </div>
      <BottomNavbar/>
    </>
  );
}

export default Dashboard;

