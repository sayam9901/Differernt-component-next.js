import React from 'react';
import ChartComponent from '../pages/component/ChartComponent'; // Update the path

export default {
  title: 'ChartComponent',
  component: ChartComponent,
};

const Template = (args) => <ChartComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
