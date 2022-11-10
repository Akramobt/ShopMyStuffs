import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    const jssSyles= document.querySelector('#jss-server-side');
    if(jssSyles){
      jssSyles.parentElement.removeChild(jssSyles);
    }
  },[]);

  return <Component {...pageProps} />
}

export default MyApp
