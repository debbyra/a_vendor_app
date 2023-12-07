// ChartConfig.jsx
import { Chart, LinearScale, CategoryScale } from 'chart.js';

// Register the required scales
Chart.register(LinearScale, CategoryScale);

export const chartConfig = {
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
};











// // ChartConfig.js
// import { LinearScale, CategoryScale } from 'chart.js';

// CartesianScaleTypeRegistry.register('linear', LinearScale, {});
// CartesianScaleTypeRegistry.register('category', CategoryScale, {});

// export const chartConfig = {
//   scales: {
//     x: {
//       type: 'category',
//     },
//     y: {
//       beginAtZero: true,
//     },
//   },
//   maintainAspectRatio: false,
//   responsive: true,
// };
