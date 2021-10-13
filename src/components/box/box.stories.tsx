import React from 'react';
import { Box } from '../';

export default {
  title: 'Box',
};

export const simpleBorderedBox = () => (
  <Box borderWidth="10px" padding="1em">
    Contents
  </Box>
);
