import { ServerStyleSheets } from '@mui/styles';
import Document,{Html, NextScript,Head,Main} from 'next/document';
import React from 'react';

export default class Mydocument extends Document{
    render(){
        return(
        <Html lang="en">
            <Head></Head>
            <body>
              <Main/>
              <NextScript/>  
            </body>
        </Html>
        )
    }

}


Mydocument.getInitialProps= async(ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage=()=>{
      return originalRenderPage({
        enhaceApp:(App)=>(props)=>sheets.collect(<App {...props}/>),
       }) ;
    };
    const intialProps = await Document.getInitialProps(ctx);
    return{
        ...intialProps,
        styles:[
          ...React.Children.toArray(intialProps.styles),
          sheets.getStyleElement(),  
        ],
    };
};