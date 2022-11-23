import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) =>({
   
    navbar:{
        backgroundColor : '#203040',
        '& a':{
           color: '#ffffff',
           marginLeft : 10,  
        },
    },
    brand:{
        fontWeight: 'bold',
        fontSize: '1.5rem',
       // marginBottom:'30px',

    },
    grow:{
        flexGrow: 1,
    },
    main : {
        minHeight: '80vh',

    },
    footer: {
         textAlign: 'center',

    },
    section: {
        marginTop: '10px',
        marginBottom: '10px',
   }
    
}));
export default useStyles;