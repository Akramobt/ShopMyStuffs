import React from 'react';
import Head from 'next/head';
import {AppBar,Toolbar,Typography} from '@material-ui/core';

export default function Layout() {
  return (
    <div>
      <Head>
        <title> Shop My Stuff</title>
      </Head>
      <AppBar position = "static">
        <Toolbar>
            <Typography> SMStuff</Typography>

        </Toolbar>
      </AppBar>
      
    </div>
  )
}
