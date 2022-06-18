import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Income/Expenses Line Chart',
      },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        fill: true,
        lineTension: '.25',
        borderColor: '#068374',
        backgroundColor: 'rgba(6, 131, 116, 0.05)',
        borderWidth: 2,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      },
      {
        label: 'Expenses',       
        fill: false,
        lineTension: '.25',
        borderColor: 'rgba(223, 224, 235, 1)',
        backgroundColor: 'rgba(223, 224, 235, 1)',
        borderWidth: 2,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      },
    ],
  };
  


export const LineChart = () => {  

    return(
        <>
            <Line
                options={options}
                data={data} />
        </>
    )
}