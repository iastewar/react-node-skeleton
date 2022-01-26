import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactECharts from 'echarts-for-react';

function App() {
  const option = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42]
        ]
      }
    ]
  };

  return (
   <div className='main-container'>
     <ReactECharts option={option}></ReactECharts>
   </div>
  );
}

export default App;
