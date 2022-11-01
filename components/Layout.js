import React, { Children } from 'react';
import Head from 'next/head';
import {AppBar,Toolbar,Typography,Container} from '@mui/material';
import useStyles from '../utils/Styles';

export default function Layout({children}) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title> Shop My Stuff</title>
      </Head>
      <AppBar position = "static" className={classes.navbar}>
        <Toolbar>
            <Typography> ShopMyStuff</Typography>

        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
      <footer>
        <Typography>
          All rights reserved . Shop My stuff. 
        </Typography>
      </footer>
      
    </div>
  )
}
