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
  import { useEffect, useState } from "react";
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
            display: {
              // xs: "block", // 100%
              sm: "block", //600px
              md: "flex", //900px
            },
            justifyContent: "space-between",
          }}
        >
                  <Box 
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                          gap: 2,
                        m: 7
                      }}
          >
          <Typography variant="h3" color="error.main">
            Employee page
          </Typography>
          <Button variant="outlined" size="large"
  sx={{
    minWidth: "200px",
  }}
  >Activity history</Button>   
          </Box>
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
  
      {/* <Button variant="outlined" size="large"
  sx={{
    minWidth: "200px",
  }}
  >Load deposit</Button>       */}
          </Box>
        </Box>
  
  
  
  
  
      </>
    );
  };
  
  export default Page;
  