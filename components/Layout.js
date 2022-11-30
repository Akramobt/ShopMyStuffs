import React, { Children,useContext } from 'react';
import Head from 'next/head';
import {AppBar,Toolbar,Typography,Container, CssBaseline, Switch} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useStyles from '../utils/Styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Link from 'next/link' ;
import { Store } from '../utils/Store';

export default function Layout({title ,description,children}) {
  const{state, dispatch}=useContext(Store);
  const {darkMode}=state;
  const theme= createTheme(
    {
      typography: {
        h1:{
          fontSize: '1.6rem',
          fontWeight: '400',
          margin:'1rem 0',

        },
        h2:{
          fontSize: '1.4rem',
          fontWeight: '400',
          margin:'1rem 0',

        },
        body1:{
          fontWeight: 'normal',
        },
        
      },
      palette:{
        type: darkMode ? 'dark' : 'light',
              primary:{
               main:'#f0c000',
              },
              secondary:{          
               main:'#208080',
       } 
      },
    } );
  const classes = useStyles();
  const darkModeChangeHandler = ()=>{
    dispatch({type: darkMode ?'DARK_MODE_OFF': 'DARK_MODE_ON'});
 //   const newDarkMode = !darkMode;
  //  Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div>
      <Head>
  
        <title>{title?`${title}- Shop My Stuff`:'Shop My Stuff'} </title>
        {description && <meta name="description" content={description}></meta>}
      
      </Head>
      <ThemeProvider theme={theme} >
        <CssBaseline/>
      <AppBar position = "static" className={classes.navbar}>
        <Toolbar>
            <Link href='/'><Typography className={classes.brand}>ShopMyStuff</Typography> </Link>
         <div className={classes.grow}></div>
         <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
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
      </ThemeProvider>
      
      
    </div>
  )
}
