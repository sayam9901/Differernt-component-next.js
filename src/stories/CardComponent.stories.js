// .storybook/CardComponent.stories.js
import React from 'react';
import { Story } from '@storybook/react';
import CardComponent from '../pages/component/CardComponent';

export default {
    title: 'CardComponent',
    component: CardComponent,
};

const Template = (args) => <CardComponent {...args} />;

export const Default = Template.bind({});
