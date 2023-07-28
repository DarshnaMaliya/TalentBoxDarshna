import { Box, Typography, Grid, Button } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import spotifyLogo from '../images/spotify.jpg';
import googleLogo from '../images/google.jpg';
import microsoftLogo from '../images/microsoft.jpg';
import amazonLogo from '../images/amazon.jpg';

const Home = () => {
  return (
    <div>
      <Box maxWidth={550} display={"flex"} flexDirection="column" alignContent={"center"} marginLeft={40} marginTop={10}>
        <Typography variant="h4">Learn To code - for free.</Typography><br />
        <Typography variant="h4">Build projects.</Typography><br />
        <Typography variant="h4">Earn certificates.</Typography><br />
        <Typography>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies incluidng:</Typography>
        <Box>
          <br />
          <Grid container spacing={3}>
            <Grid item>
              <AppleIcon />
              {/* <img src={appleLogo} style={{ height: 30, width: 100, marginTop: 1}} alt="apple"></img> */}
            </Grid>
            <Grid item>
              <img src={googleLogo} style={{ height: 20, width: 100, marginTop: 1 }} alt="google"></img>
            </Grid>
            <Grid item>
              <img src={microsoftLogo} style={{ height: 20, width: 100, marginTop: 1 }} alt="microsoft"></img>
            </Grid>
            <Grid item>
              <img src={spotifyLogo} style={{ height: 20, width: 100, marginTop: 1 }} alt="spotify"></img>
            </Grid>
            <Grid item>
              <img src={amazonLogo} style={{ height: 20, width: 100, marginTop: 1 }} alt="amazon"></img>
            </Grid>
          </Grid>
          <br />
        </Box>
      </Box>
      <Box alignContent={"center"} marginLeft={60}>
        <Button spacing="15" variant="contained" color="warning" size="medium" alignContent={"center"} marginLeft={40}> Get started (it's free)</Button>
      </Box>
      <br />
    </div>
  )
}

export default Home;