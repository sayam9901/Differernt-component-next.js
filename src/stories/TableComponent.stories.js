// .storybook/TableComponent.stories.js
import React from 'react';
import { Story } from '@storybook/react';
import TableComponent from '../pages/component/TableComponent';

export default {
    title: 'TableComponent',
    component: TableComponent,
};

const Template = (args) => <TableComponent {...args} />;

export const Default = Template.bind({});
