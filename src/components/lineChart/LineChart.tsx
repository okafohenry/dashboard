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
    elements: {
      point:{
          radius: 0
      }
   },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Income/Expenses Line Chart',
      },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        fill: true,
        lineTension: '.3',
        borderColor: '#068374',
        backgroundColor: 'rgba(6, 131, 116, 0.05)',
        borderWidth: 2,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      },
      {
        label: 'Expenses',       
        fill: false,
        lineTension: '.3',
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