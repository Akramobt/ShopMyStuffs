import React from 'react';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import {useRouter} from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';

export default function ProductScreen() {
 const router= useRouter();
 const{slug}= router.query;
 const product=data.product.find((a) => a.slug === slug);

 if(!product){ 
   return <div> Product not found</div>;
 }
  return (
    <Layout title = {product.name}>
      <div>
        <NextLink>
          <Link>back to product</Link>
        </NextLink>
      </div>
    </Layout>
    
  );
  
}
