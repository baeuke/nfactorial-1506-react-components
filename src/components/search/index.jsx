
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const Search = () => {


   return (
      <Box
         component="form"
         sx={{ 
         '& > :not(style)': { m: 1, width: '25ch'}
         }}
         
      noValidate
      autoComplete="off"
      >
         <TextField id="standard-basic" label="Search Star Wars" variant="outlined" type="search" sx = {{ input: { color: 'white', backgroundColor: 'rgb(50, 43, 122)', borderRadius: '10px'}
         }}/>
      </Box>
   );
}
