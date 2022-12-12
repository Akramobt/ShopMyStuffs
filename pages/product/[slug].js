import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Grid, Link, Typography,List,ListItem,Card, Button } from '@mui/material';
import {useRouter} from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import { ClassNames } from '@emotion/react';
import useStyles from '../../utils/Styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Stack } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Product from '../../model/Product';
import db from '../../utils/db';


export default function ProductScreen(props) {
  const {product}= props;
  const classes= useStyles();
 //const router= useRouter();
// const{slug}= router.query;
 //const product=data.products.find((a) => a.slug === slug);

 if(!product){ 
   return <div> Product not found</div>;
 }
  return (
    <Layout title = {product.name } description={product.description}>
      <div className={classes.section}>
         
          <Link href='/' >
            <Stack sx={{ flexDirection:'row' }}>
            <ArrowBackIosNewIcon sx={{ fontSize: "30px" ,color:'primary' }}/>
            <Typography sx={{ mt:'5px',color:'primary' }}>
              Back to products list
            </Typography>
          </Stack>
          </Link>
       
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12}  md={6}>
          <Image 
          src={product.image} 
          alt={product.name} 
          width={640} 
          height={640} 
          layout="responsive" />

        </Grid>
        <Grid item xs={12} md={3}>
          <List>
          <Typography component="h1" variant='h1'><ListItem> {product.name} </ListItem></Typography>
          <Typography><ListItem> Category: {product.categorry} </ListItem></Typography>
          <Typography><ListItem> Brand: {product.brand} </ListItem></Typography>
          <Typography>   
            <ListItem> 
              Rating: {product.rating} stars ({product.numReview} review)
              </ListItem>
            </Typography>   
            <ListItem> 
             
              <Typography>
              Description:  {product.description} 
              </Typography>
              
              </ListItem>

          </List>      
        </Grid>
        <Grid item md={3} sx={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}> <Typography> Price </Typography> </Grid>
                  <Grid item xs={6} > <Typography> ${product.price} </Typography> </Grid>

                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}> <Typography> Status </Typography> </Grid>
                  <Grid item xs={6} > <Typography> {product.countInStock>0?'In stock':'Unavailable'} </Typography> </Grid>

                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant='contained' color='primary'>
                  <AddShoppingCartIcon/>
                  Add to Card
                </Button>
              </ListItem>
            </List>

          </Card>

        </Grid>

      </Grid>
    </Layout>
    
  );
  
}

//this function is to get data from data base and pass it to our UI product Page thats why we using product slug js  becaus it s just one product thats why we used findOne function to get one  product
//read documentation of lean / getServerSideProps/ convertDocToObj for converting 
export async function getServerSideProps(context){
  const {params} = context;
  const {slug} = params;
  await db.connect();
  const product = await Product.findOne({slug}).lean();
  await db.disconnect();
  return {
    props:{
      product: db.convertDocToObj(product),
    },
  };
}