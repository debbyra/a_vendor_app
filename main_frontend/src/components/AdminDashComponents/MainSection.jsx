import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { chartConfig } from './ChartConfig';

const MainSection = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create the new chart using the Bar component
    const newChart = new Bar(chartRef.current, {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Orders',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
          {
            label: 'Users',
            data: [5, 10, 15, 20, 25, 30],
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
        ],
      },
      options: chartConfig,
    });

    // Save the chart instance to the ref
    chartRef.current = newChart;

    // Cleanup on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="main-section">
      <div className="analytics-chart">
        <Bar data={chartConfig} />
      </div>
      <div className="counters">
        <div className="users-count">
          <h3>Users Count</h3>
          <p>1500</p>
        </div>
        <div className="orders-count">
          <h3>Orders Count</h3>
          <p>500</p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
