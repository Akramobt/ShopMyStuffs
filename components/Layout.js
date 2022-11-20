import React, { Children } from 'react';
import Head from 'next/head';
import {AppBar,Toolbar,Typography,Container} from '@mui/material';
import useStyles from '../utils/Styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Link from 'next/link' ;

export default function Layout({children}) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title> Shop My Stuff</title>
      </Head>
      <AppBar position = "static" className={classes.navbar}>
        <Toolbar>
            <Link href='/'><Typography className={classes.brand}>ShopMyStuff</Typography> </Link>
         <div className={classes.grow}></div>
         <div>
          <Link href="/Cart"> <ShoppingCartIcon/></Link> 
           <Link href="/Login"> <AccountCircleIcon/> </Link>
         </div> 
            
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Typography>
          All rights reserved . Shop My stuff. 
        </Typography>
      </footer>
      
    </div>
  )
}
