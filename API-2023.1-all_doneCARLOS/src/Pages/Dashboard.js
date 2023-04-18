import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

function Dashboard() {
  const chartRef = useRef();

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: ['Ativos', 'Inativos'],
        datasets: [{
          data: [10, 20],
          backgroundColor: ['#36A2EB', '#FF6384'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        width: 50,
        height: 50
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