// .storybook/FormComponent.stories.js
import React from 'react';
import { Story } from '@storybook/react';
import FormComponent from '../pages/component/FormComponent';

export default {
    title: 'FormComponent',
    component: FormComponent,
};

const Template = (args) => <FormComponent {...args} />;

export const Default = Template.bind({});
