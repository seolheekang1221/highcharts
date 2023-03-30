import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Props {
  options: Highcharts.Options;
}

const MyChart: React.FC<Props> = ({ options }) => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default MyChart;