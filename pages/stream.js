import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Head from 'next/head';
import HelperToolkit from '../src/components/elements/helperTooltip';
import { timeSlot } from '../src/const/const';

export default function Page() {
  const theme = useTheme();
  const [time, setTime] = useState('');
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (<>
      <Head>
      <title>
        FLOWery | Stream
      </title>
    </Head>

<Box 
      sx={{
        display: 'flex',
          justifyContent: 'center',
        p: 1,
        m: 1,
        mt: 10,
        bgcolor: 'background.paper',
      }} >
      <Card
        sx={{
          width: '500px',
          borderRadius: 2,
          boxShadow: theme.shadows[25] 
        }}>
        <CardMedia
          component='img'
          height='160'
          image="/static/images/stream.jpg"
          alt='stream picture'
        />
        <CardContent 
            sx={{
              p: 1,
              m: 1,
            }}>
                <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
                  <Typography gutterBottom variant='h6' component='div' mt='6px'>
            Recievers wallet address
          </Typography>
          <HelperToolkit title={"Stream money, don't miss honey!:)"}/>
      </Box>

          <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField fullWidth id="outlined-basic" label="Public address or ENS" variant="outlined" />
    </Box>
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
    <Typography gutterBottom variant='h6' component='div' ml='2px' mt='6px'>
            Flow rate
    </Typography>
<HelperToolkit title={"You could be highly motivated earning every second, tell about it to your employer!)"}/>
    </Box>

    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField fullWidth 
       sx={{ 
      // '.MuiOutlinedInput-notchedOutline': { 
      //   border: "1px solid #484850",
      //   borderRadius: "5px 0 0 5px",
      //   opacity: 0.2
      // },
      //  "& .Mui-focused .MuiOutlinedInput-notchedOutline": 
      // { 
      // border: "1px solid #484850",
      // borderRadius: "5px 0 0 5px"
      // },
      // "&:hover": {
      //   border: "1px solid #484850",
      //   borderRadius: "5px 0 0 5px"
      // },
      // "&:hover .Mui-focused .MuiOutlinedInput-notchedOutline": {
      //   border: 0,
      //   // border: "1px solid #484850",
      //   // borderRadius: "5px 0 0 5px"
      // },
      // "&:hover .MuiOutlinedInput-notchedOutline": {
      //   border: 0,
      //   // border: "1px solid #484850",
      //   // borderRadius: "5px 0 0 5px"
      // }
   }}
      />
      <FormControl 
      sx={{ minWidth: 150 }}
      >
        <InputLabel 
        id="time-label" 
        >Choose period</InputLabel>
        <Select
          labelId="time-label"
          id="time-select"
          value={time}
          label="Time"
          onChange={handleChange}
        >
          {timeSlot.map(({id, value}) => (<MenuItem key={id} value={value}>{id}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
        </CardContent>

        <CardActions
      sx={{
        display: 'flex',
          justifyContent: 'center',
          m: 1
      }} >
          <Button variant="outlined"
            sx={{
            height: 50,
            width: 170,
            fontSize: theme.typography.h6,
            color: theme.palette.text.secondary,
            }}
          >Send Stream</Button>
         </CardActions>
      </Card>
    </Box>


</>
  );
}