import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store";
import SearchIcon from '@mui/icons-material/Search';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import freecodeCampLogo from '../images/freecodecamp.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  }

  return (
    <AppBar sx={{ background: "#000000" }}
      position="sticky">
      <Toolbar marginTop={1} size="small">
        <TextField placeholder="search 8,000+ tutorials" color="primary" size="small" sx={{ backgroundColor: "grey" }}
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          maxRows={1} marginLeft={1} >  </TextField>
        <img src={freecodeCampLogo} style={{ height: 20, width: 100, marginTop: 1, marginLeft: 280 }} alt="logo" />
        <Box display={"flex"} flexDirection={"row"} marginLeft={"auto"} whiteSpace={1}>
          <Button variant="contained" color="primary" sx={{ margin: 1 }} size="small" >Menu</Button>
          {!isLoggedIn && <Button
            LinkComponent={Link} to="/signin"
            variant="contained"
            color="warning"
            sx={{ margin: 1 }}>Sign-in</Button>}

          {isLoggedIn && <>
            <Button
              onClick={() => dispatch(loginActions.logout())}
              LinkComponent={Link} to=""
              variant="contained"
              sx={{ margin: 1 }}
              color="warning">Logout</Button>
            <div style={{ marginTop: 5 }}>
              <CottageOutlinedIcon onClick={goHome} fontSize="large" />
            </div>
          </>
          }
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;