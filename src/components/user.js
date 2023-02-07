import {
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
import ControlCheck from "./elements/controlCheck";
import CustomAvatar from "./elements/customAvatar";
import BasicModal from "./elements/modal";

const GoodsItem = ({ name, check }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12}>
      <Card
        sx={{
          display: {
            sx: 'column', // 100%
            sm: 'flex', //600px
            // md: 'flex', //900px
            // lg: 'flex', //1200px
            // xl: 'flex', //1536px
          },
          borderRadius: 2,
          boxShadow: theme.shadows[25],
          // minWidth: 300,
          alignItems: 'center'
        }}
      >
        <CustomAvatar n={name}/>
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Address: 0x0000000000000000123456789</Typography>
        </CardContent>
        {!check 
? <CardActions
          sx={{
            ml: 8
          }} 
          >
<BasicModal nameModal={"Start Stream"}>
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
              label="Amount per hour"
              variant="outlined"
            />
            <Button
              variant="outlined"
            >
              Start stream
            </Button>
          </Box>
  </BasicModal> 
  </CardActions>
: <Box ml='150px'><ControlCheck /></Box>}
      </Card>
    </Grid>
  );
};

export default GoodsItem;
