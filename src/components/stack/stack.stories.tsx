import React from 'react';
import { Box, Stack } from '../../components';

export default {
  title: 'Stack',
};

export const boxStack = () => (
  <Stack space="1rem" splitAfter={2}>
    <Box borderWidth="1px">Top</Box>
    <Box borderWidth="1px">Middle</Box>
    <Box borderWidth="1px">
      <Stack splitAfter={3}>
        <Box borderWidth="1px">Top</Box>
        <Box borderWidth="1px">Middle</Box>
        <Box borderWidth="1px">Bottom</Box>
      </Stack>
    </Box>
    <Box borderWidth="1px">Middle</Box>
  </Stack>
);
