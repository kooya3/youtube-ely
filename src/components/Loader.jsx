import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';
const Loading = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}
  >
    <InfinitySpin color="#CE0318" />
  </Box>
);
const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
