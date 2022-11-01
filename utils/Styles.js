import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) =>({
   
    navbar:{
        backgroundColor : '#203040',
        '& a':{
           color: '#ffffff',
           marginLeft : 10,  
        },
    },
    
}));
export default useStyles;