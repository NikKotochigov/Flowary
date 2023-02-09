import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import CustomBadge from "./elements/badge";
import ControlCheck from "./elements/controlCheck";
import CustomAvatar from "./elements/customAvatar";
import BasicModal from "./elements/modal";

const GoodsItem = ({ name, check }) => {
  const theme = useTheme();
  const [amountPerHour, setAmountPerHour] = useState(null);
  const moneyPerSec = amountPerHour / 60 / 60 / 10;
  const [balance, setBalance] = useState(0);
  const [startstop, setStartstop] = useState(false);

  function handleToggleClick() {
    setStartstop((prev) => !prev);
  }

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (startstop) {
        setBalance(balance + moneyPerSec);
      }
      // if(!startstop) {
      //   setBalance(balance)
      // }
      // if (seconds === 0) {
      //     handleStopClick()
      // }
    }, 100);
    return () => {
      clearInterval(myInterval);
    };
  });

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          display: {
            sx: "column", // 100%
            sm: "flex", //600px
            // md: 'flex', //900px
            // lg: 'flex', //1200px
            // xl: 'flex', //1536px
          },
          borderRadius: 2,
          boxShadow: theme.shadows[25],
          // minWidth: 300,
          alignItems: "center",
        }}
      >
        {startstop ? (
          <CustomBadge content={"Active stream"}>
            <CustomAvatar n={name} />
          </CustomBadge>
        ) : (
          <CustomAvatar n={name} />
        )}
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">
            Address: 0x0000000000000000123456789
          </Typography>
          {startstop && (
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "green" }}
            >
              Amount of stream: {balance.toFixed(6)}
            </Typography>
          )}
        </CardContent>
        {!check ? (
          <CardActions
            sx={{
              ml: 8,
            }}
          >
            {startstop ? (
              <Button
                variant="outlined"
                sx={{ color: "red" }}
                onClick={handleToggleClick}
              >
                Stop stream
              </Button>
            ) : (
              <BasicModal
                nameModal={"Start Stream"}
                open={open}
                handleClickOpen={handleClickOpen}
                // handleClose={handleClose}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    width: 400,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image="/static/images/stream.jpg"
                    alt="stream picture"
                  />
                  <TextField
                    fullWidth
                    label="Amount per hour"
                    variant="outlined"
                    onChange={(e) => setAmountPerHour(e.target.value)}
                  />
                  <Box onClick={handleClickOpen}>
                    <Button variant="outlined" onClick={handleToggleClick}>
                      Start stream
                    </Button>
                  </Box>
                </Box>
              </BasicModal>
            )}
          </CardActions>
        ) : (
          <Box ml="150px">
            <ControlCheck />
          </Box>
        )}
      </Card>
    </Grid>
  );
};

export default GoodsItem;
