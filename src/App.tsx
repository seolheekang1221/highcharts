import React from 'react';
import './App.css';
import MyChart from './components/MyChart';
import Highcharts from 'highcharts';

const options: Highcharts.Options = {
  title: {
    text: 'Seolhee growth chart',
  },
  series: [
    {
      type: 'line',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 5],
      name: 'Sample Data',
    },
  ],
};

const barOptions: Highcharts.Options = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Fruit Consumption',
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges'],
  },
  yAxis: {
    title: {
      text: 'Fruit eaten',
    },
  },
  series: [
    {
      type: 'bar',
      name: 'Jane',
      data: [1, 0, 4],
    },
    {
      type: 'bar',
      name: 'John',
      data: [5, 7, 3],
    },
  ],
};

const scatterOptions: Highcharts.Options = {
  chart: {
    type: 'scatter',
  },
  title: {
    text: 'Height vs Weight',
  },
  xAxis: {
    title: {
      text: 'Height (cm)',
    },
  },
  yAxis: {
    title: {
      text: 'Weight (kg)',
    },
  },
  series: [
    {
      type: 'scatter',
      name: 'Female',
      data: [
        [161.2, 51.6],
        [167.5, 59.0],
        [159.5, 49.2],
        [157.0, 63.0],
        [155.8, 53.6],
      ],
      marker: {
        symbol: 'circle',
      },
    },
    {
      type: 'scatter',
      name: 'Male',
      data: [
        [174.0, 65.6],
        [175.3, 71.8],
        [193.5, 80.7],
        [186.5, 72.6],
        [187.2, 78.8],
      ],
      marker: {
        symbol: 'circle',
      },
    },
  ],
};

const areaOptions: Highcharts.Options = {
  chart: {
    type: 'area',
  },
  title: {
    text: 'Historic and Estimated Worldwide Population Growth',
  },
  subtitle: {
    text: 'Source: Wikipedia.org',
  },
  xAxis: {
    categories: [
      '1750',
      '1800',
      '1850',
      '1900',
      '1950',
      '1999',
      '2050',
    ],
    tickmarkPlacement: 'on',
    title: {
      text: 'Year',
    },
  },
  yAxis: {
    title: {
      text: 'Billions',
    },
    labels: {
      formatter: function () {
        if (typeof this.value === 'number') {
          return (this.value / 1000).toString();
        } else {
          return '';
        }
      },
    },
  },
  tooltip: {
    split: true,
    valueSuffix: ' millions',
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666',
      },
    },
  },
  series: [
    {
      type: 'area',
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268],
    },
    {
      type: 'area',
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766],
    },
    {
      type: 'area',
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628],
    },
    {
      type: 'area',
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201],
    },
    {
      type: 'area',
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46],
    },
  ],
};

const columnOptions: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Monthly Average Rainfall',
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)',
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      type: 'column',
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    },
    {
      type: 'column',
      name: 'New York',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
    },
    {
      type: 'column',
      name: 'London',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 52.6, 53.2, 50.6, 56.2, 54.2],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyChart options={options} />
        <MyChart options={barOptions} />
        <MyChart options={scatterOptions} />
        <MyChart options={areaOptions} />
        <MyChart options={columnOptions} />
      </header>
    </div>
  );
}

export default App;