import React, { useEffect } from "react";
import { useUserStore } from "../../store/user/userStore";
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const BarChart: React.FC = () => {
  const { stats, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(stats);

  const data = {
    labels: Object.keys(stats.rolesCount),
    datasets: [
      {
        label: 'Number of Users',
        data: Object.values(stats.rolesCount),
        backgroundColor: '#1e293b',
        borderColor: '#0f172a',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Users by Role',
      },
    },
    aspectRatio: 3/4,
    
  };



  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  )
}
