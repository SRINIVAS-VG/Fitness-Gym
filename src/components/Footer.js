import React from 'react'
import {Box , Stack , Typography} from '@mui/material';
import Logo from '../assets/images/Logo-3.jpeg';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto', borderRadius:"20px"}} />
        <Typography variant='h6' pb="40px" mt="20px"  textAlign="center" alignItems="center">
          Created by Srinivas V G || Void Break 😎
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer