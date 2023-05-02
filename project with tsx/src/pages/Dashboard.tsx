import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/Navbar';
import BottomNavbar from '../components/BottomNavbar';
import axios from 'axios';

function Dashboard(): JSX.Element {

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    axios.get<{ userStatus: string }>('http://localhost:3001/userAtivo')
      .then((response) => {
        const userAtivo: string = response.data.userStatus;
        console.log(userAtivo);
        localStorage.setItem('userAtivo', userAtivo);
      });


    axios.get<{ userStatus: string }>('http://localhost:3001/userInativo')
      .then((response) => {
        const userInativo: string = response.data.userStatus;
        console.log(userInativo);
        localStorage.setItem('userInativo', userInativo);
      });

    const chart = new Chart(chartRef.current!, {
      type: 'pie',
      data: {
        labels: ['Ativos', 'Inativos'],
        datasets: [{
          data: [
            localStorage.getItem('userAtivo') ?? '0',
            localStorage.getItem('userInativo') ?? '0'
          ],
          backgroundColor: ['#36A2EB', '#FF6384'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }

    });

    return () => chart.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="mt-5px">
          <div className='flex-grow-1 mx-5 pb-5'>
            <div className='row text-center mt-5 text-primary'>
              <h3 style={{ color: '#FF6B00' }}>Dashboard</h3>
            </div>

            <div className='row text-center mt-5'>
              <h6>Gráfico referente ao número de usuários Ativos e Inativos</h6>
            </div>

            <div className='row text-center mt-5' style={{ color: '#FF6B00', width: '100%', display: 'flex', alignItems: 'center', height: '300px' }}>
              <canvas ref={chartRef} style={{ width: '100%', height: '100%' }}></canvas>
            </div>


          </div>

          <div className="navbar-container" style={{ zIndex: 1 }}>
            <BottomNavbar />

          </div>


        </div>
      </div>
    </>
  );
}

export default Dashboard;
