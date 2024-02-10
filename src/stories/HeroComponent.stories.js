import React from 'react';
import HeroComponent from '../pages/component/HeroComponent'; // Update the path

export default {
  title: 'HeroComponent',
  component: HeroComponent,
};

const Template = (args) => <HeroComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
