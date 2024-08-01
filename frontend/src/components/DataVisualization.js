import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const DataVisualization = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prepare bar chart data
  const barChartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Versions',
        data: data.map(item => item.version),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare pie chart data
  const pieChartData = {
    labels: ['Bosnian', 'Galician', 'Hindi', 'Icelandic', 'Maltese', 'Sesotho sa Leboa', 'Setswana', 'Sindhi', 'Uyghur', 'isiZulu'],
    datasets: [
      {
        data: [
          data.filter(item => item.language === 'Bosnian').length,
          data.filter(item => item.language === 'Galician').length,
          data.filter(item => item.language === 'Hindi').length,
          data.filter(item => item.language === 'Icelandic').length,
          data.filter(item => item.language === 'Maltese').length,
          data.filter(item => item.language === 'Sesotho sa Leboa').length,
          data.filter(item => item.language === 'Setswana').length,
          data.filter(item => item.language === 'Sindhi').length,
          data.filter(item => item.language === 'Uyghur').length,
          data.filter(item => item.language === 'isiZulu').length,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#F7464A', '#8E5EA2', '#3E95CD', '#7F3C8C', '#B73B6F'],
        hoverOffset: 4,
      },
    ],
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn btn-secondary">Show Stats in Pie And Bar Charts</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Data Visualization</h2>
            <div className="chart-container">
              <div className="chart">
                <h3>Bar Chart</h3>
                <Bar data={barChartData} />
              </div>
              <div className="chart">
                <h3>Pie Chart</h3>
                <Pie data={pieChartData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataVisualization;
