import React from 'react'
import { Meta, Story } from '@storybook/react'

import AuthForm from './AuthForm'

export default {
    title: "Components/AuthForm",
    component: AuthForm
} as Meta;

const Template: Story = (arg) => <AuthForm />

export const Basic = Template.bind({})