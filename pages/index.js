import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import BasicModal from "../src/components/elements/modal";

import User from "../src/components/user";
import { goods } from "../src/consts/data";
const Page = () => {
  const theme = useTheme();
//   const [active, setActive] = useState(false);
//   const handleOpen = () => setActive(true);
const [check, setCheck] = useState(false)
const handleCheck = () => setCheck(!check)
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h2" m={5} color="warning.light">
          COMPANY NAME page
        </Typography>
        <Box 
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      m: 7
                    }}
        >
                     <Typography variant="h4" color="common.main">
          Avaibale balance: 1000$</Typography>

    <Button variant="outlined" size="large"
sx={{
  minWidth: "200px",
}}
>Load deposit</Button>      
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 3,
        }}
      >
      {!check 
      ? (<>
        <BasicModal nameModal={"Add reciever"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              width: 400
            }}
          >
              <CardMedia
          component='img'
          height='160'
          image="/static/images/stream.jpg"
          alt='stream picture'
        />
            <TextField
              fullWidth
              label="Name of new reciever"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Address of new reciever"
              variant="outlined"
            />
            <Button
              variant="outlined"
              sx={{
                width: 170,
                // fontSize: theme.typography.h6,
                // color: theme.palette.text.primary,
              }}
            >
              Add info
            </Button>
          </Box>
        </BasicModal>
        <Button variant="outlined" onClick={handleCheck}>Remove reciever</Button>
      </>)
      : <Button variant="outlined" onClick={handleCheck}>Confirm remove</Button>}
</Box>


      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={3} maxWidth={800}>
          {goods.map((item) => (
            <User key={item.id} {...item} check={check}/>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Page;
