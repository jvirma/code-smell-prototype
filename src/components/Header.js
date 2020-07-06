import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
  Box,
  Container,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

import logo from "../logo.png";

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 2,
  style: { width: '12rem', height: '12rem' },
};

// CSS STYLES
const useStyles = makeStyles(theme=>({

  typedContainer: {
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    flexGrow: 1,
    height: "100%",
    width: "800px",
    flexDirection: "column",
    textAlign: "center",
    margin:"auto"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" alignItems="center" id="container">
      <div id="page">
      <Box width={1} mb={2}>
        <Typography variant="h4" color="primary">Does your code smell?</Typography>
      </Box>
      
      <Box width={1} pb={2}>
      <TextField
          focused
          xs={12}
          id="outlined-multiline-static"
          multiline
          fullWidth
          placeholder="Insert your code here!"
          rows={10}
          defaultValue=""
          variant="outlined"
        />
      </Box>

      <Box width={1} pb={2}>
        <Box pb={2}>
        <Button fullWidth variant="contained" color="primary">
          Random code sample
        </Button>
      </Box>
      
      <Button  fullWidth variant="contained" color="primary">
        Paste from clipboard
      </Button>
      </Box>
      <Box component="div"  justifyContent="center">
      <Box  component="div"   justifyContent="center" alignItems="center" borderRadius="50%" {...defaultProps} style={{boxSizing: "border-box"}}>
        <Typography variant="h2" color="primary" >0%</Typography>
      </Box>
      </Box>
      </div>
    </Container>
  )
}

export default Header