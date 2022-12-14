import Layout from '../components/Layout';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,Button, CardActions } from '@mui/material';
import data from '../utils/data';
import db from '../utils/db';
import NextLink from 'next/link';
import Product from '../model/Product';

export default function Home(props) {
  const {products} = props;
  return (
    <Layout>
     <div>
       <h1> Products</h1>
       <Grid container spacing={3}
      
       >
        {products.map((product)=>(
          <Grid item md={4} key={product.name}>
            <Card>
             <NextLink href={`/product/${product.slug}`} passHref>
              <CardActionArea>
                <CardMedia component="img" 
                image={product.image} 
                title={product.name}
                ></CardMedia>
                <CardContent>
                  <Typography>
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
             </NextLink>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </Card>

          </Grid>
        ))}
       </Grid>
      
      </div>
    </Layout>
  )
}

//this function is to get data from data base and pass it to our UI Homepage thats why we using Products beacaus its all of products we have in this fucntion and product slug js 
//read documentation of lean / getServerSideProps/ convertDocToObj for converting 

export async function getServerSideProps(){
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props:{
      products: products.map(db.convertDocToObj),
    },
  };
}