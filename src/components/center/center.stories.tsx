import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../..';
import Center, { CenterProps, CenterDefaultProps } from './Center';

export default {
  title: 'Center',
  component: Center,
  argTypes: {
    andText: {
      control: { type: 'boolean' },
    },
    gutters: {
      control: { type: 'text' },
    },
    intrinsic: {
      control: { type: 'boolean' },
    },
    max: {
      control: { type: 'text' },
    },
  },
} as Meta;

export const Playground: Story<CenterProps> = (props) => (
  <Box borderWidth="1px">
    <Center {...props}>
      <Box borderWidth="1px">Contents</Box>
      <Box borderWidth="1px">Contents</Box>
    </Center>
  </Box>
);

Playground.args = CenterDefaultProps;
