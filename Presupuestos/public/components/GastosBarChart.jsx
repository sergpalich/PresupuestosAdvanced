import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import gastos from '../../src/data/datos.json';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GastosBarChart = ({ semanaActual, onBarClick }) => {
  const semana = gastos.semanas[semanaActual];

  const chartData = {
    labels: semana.gastos.map((gasto) => gasto.dia),
    datasets: [
      {
        label: `Gastos de la Semana ${semana.semana}`,
        data: semana.gastos.map((gasto) => gasto.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: `Gastos de la Semana ${semana.semana}`,
      },
    },
    onClick: (event, elements) => {
        if (elements.length > 0) {
          const chartIndex = elements[0].index;
          const selectedDay = semana.gastos[chartIndex];
          onBarClick(selectedDay, chartIndex); // Llama a la función para manejar el clic
        }
      },

  };

  return (
    <div className="container d-flex justify-content-center my-4">
      <div style={{ width: '100%', height: '300px' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default GastosBarChart;
