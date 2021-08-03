/*import React from "react";
const home=()=>
{
    return(
        <div align='center'> 
        Home<br/><br></br>
        <input type="button"
        value="Go"
        />
        </div>
    )
}
export default home;*/

import React, { useEffect } from 'react';
import { Grid, Typography,Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import logo from './logo.jpeg';
import explore from './explore.jpeg';
import {Component} from 'react';
import opp from './opp.jpeg';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import { positions } from '@material-ui/system';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import axios from 'axios';
import {useState} from 'react';
import {Route, useHistory } from 'react-router-dom';
import { SettingsCellOutlined } from '@material-ui/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Formik, Form} from 'formik';
import moment from 'moment';
import { blue } from '@material-ui/core/colors';
import DashboardIcon from '@material-ui/icons/Dashboard';

const imgstyle = {
  margin: '10px 60px'
}
const useStyles = makeStyles((theme) => ({
  root: {
    minwidth:200,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  homeButton: {
    marginLeft: theme.spacing(143),
  },
  media: {
    height: 140,
    /*minwidth:200,
    alignItems:'center'*/
    
  }
}));



	export default function ButtonAppBar() {

    /*const dataInfo=JSON.parse(localStorage.getItem("myInfo"))
      const id=dataInfo.userId*/


      const [event, setEvent] = useState([]);
      let id=11
      
     useEffect(()=>{
     
      {
       
      axios.get(`http://localhost:8081/account/events/getEventParticipated/${id}`)
     .then((response) => {
     
      setEvent(response.data.events)
      
      })
    };
  }, [])
 
      
      

   
    
      
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 

  const handleClose = () => {
    setAnchorEl(null);};

 /*   
    let history = useHistory();
  const home = () => {
   
    history.push('/home');

  };
  let history = useHistory();
  const login = () => {
    setAnchorEl(null);
    history.push('/login');

  };
*/

/*const history = useHistory();*/


  return (

    
    <Box  mr={1}> 

      
       

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <DashboardIcon />
    </IconButton>
	
    <Typography variant="h6" className={classes.title}>
      Dashboard
    </Typography>

	<IconButton edge="end" padding="20px"  className={classes.homeButton} color="inherit" aria-label="menu"   >
      <HomeIcon />
    </IconButton>

	<div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" color="primary">
        Hello user,
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    
  </Toolbar>
</AppBar>

      
	<br/>

	<center> <h2 color="primary">Oppurtunities Participated</h2> </center>
<center>

<Grid item xs={12} sm={6} md={3}>
<Card className={useStyles.root}>
<CardActionArea>
<CardContent style={{backgroundColor:"yellow"}}>
<Typography gutterBottom variant="h6" component="h1" color="inherit">
  <Formik align='center'>
                            {(props) => (
                                event.map(post=>(
                                    <Form key={post.event_id}>
                                {post.name} <br/>
                                Event id : {post.event_id}<br/>
                        
                                 Type : {post.event_type} <br/>
                                Venue : {post.venue} <br/>
                               
                                </Form>
                                ))
                                
                            )}
                        </Formik>
              
               
                        </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Grid>
                </center>	    
     
      
    </Box>

  )
}

/*Date : {moment(post.start_time).format('MMMM Do YYYY')}<br></br>
Time : {moment(post.start_time).format('h:mm a')}<br></br>*/