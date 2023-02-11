import {
  Button,
  Card,
  CardMedia,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import BasicModal from "../src/components/elements/modal";
import User from "../src/components/user";
import { goods } from "../src/consts/data";
import { useState, useEffect } from "react";
import contract from "../contracts/erc20";
import provider from "../contracts/provider";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import conectSigner from "../contracts/SIGNER";
import { Box, Divider } from "@mui/material";
import getCompanyContract from "../contracts/erc20";
import connectContract from "../contracts/erc20";
import { useDispatch } from 'react-redux'


const Page = () => {
const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(prev => !prev);
// const [check, setCheck] = useState(false)
// const handleCheck = () => setCheck(!check)
const [add, setAdd] = useState('');
const [addTwo, setAddTwo] = useState(0);
const [result, setResult] = useState()
const router = useRouter();
const dispatch = useDispatch();
const handleConnectCompany = async () => {
  connectContract(add, dispatch)
  router.push('/bridge')
};


return (
    <>
  <Button size="large" variant="outlined"
  sx={{width: '400px', m: 5, fontSize: '20px'}}
  >Create company</Button>

<BasicModal 
          nameModal={"Company exist"}
          open={open}
          handleClickOpen={handleClickOpen}
          minW={400}
>
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
                label="Amount of payment"
                variant="outlined"
                onChange={(event) => setAdd(event.target.value)}

              />
          
              <Button
                variant="outlined"
                sx={{
                  width: 170,
                }}
                onClick={handleConnectCompany}
              >
               Connect
              </Button>
            </Box>
          </BasicModal>



    </>
  );
};

export default Page;










 


