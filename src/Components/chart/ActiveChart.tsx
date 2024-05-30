import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useUserStore } from '../../store/user/userStore';
import { useEffect } from 'react';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


export const ActiveChart = () => {
  const { stats, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const data = {
    labels: Object.keys(stats.activeCount),
    datasets: [
      {
        label: 'Number of Users',
        data: Object.values(stats.activeCount),
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
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
        text: 'Users Active vs Inactive',
      },
    },
    aspectRatio: 3/4,
    
  };

  return <Pie data={data} options={options} />;
}
