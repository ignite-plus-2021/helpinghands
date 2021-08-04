import React, {useEffect, useState} from 'react';
import {Grid, Box, Card, CardContent, Button, Typography, Tooltip, makeStyles} from '@material-ui/core';
import logo from './HH-logo.jpg';
import wkndevnt1 from './img1.jpg';
//import wkndevnt2 from './img2.jpg';
import moment from 'moment';
import axios from 'axios';

const useStyles = makeStyles({
    card:{
        backgroundColor:"#D6EAF8",
        '&:hover':{
            backgroundColor:"#EBF5FB",
        }
    }
    ,button:{
        color:"primary",
        '&:hover':{
            backgroundColor:"#2471A3",
        },
        marginTop:"8px"
    }
    });

const PastEvents = (props) => {
    const gridStyle={margin:'3px auto', padding:'5px auto'}
    const headStyle = {margin:'0', fontFamily:'serif', color:'blue'}
    const btnStyle = {margin:'8px 0'}
    const logoStyle = {height:98, width:128}
    
    //const stepperStyle = {}


    /*const handleChange = () => {
        props.history.push('/home)')
    }*/

    const [pevent, setPevent] = useState([])
    const event = "Past event"
    useEffect(() => {
        axios.get('http://localhost:8081/account/events/getEventsList/false/Weekend event')
        //('http://localhost:8081/account/events/getEvents/'.concat('/isFutureEvent').concat('past'))
        //(`http://localhost:8081/account/events/getEventsList/isFutureEvent${past}/eventTypes${event}`)
        .then(response => {
            console.log(response)
            console.log(response.data[0].event_id)
            setPevent(response.data)
        })
        .catch(error => {
            if(error.response.status===400 || error.response.status===401) {
                console.log(error.response.data.message)
            }
            else {
                console.log("Oop! Something went wrong")
            }
        })
    },[event])

    const classes = useStyles();
    return(
        <Box>
            <Box mt={1} mb={3} align="center">
                <img src={logo} style={logoStyle} alt="Logo" />
            </Box>

            <Box align="center">
                <Typography variant='h4' style={headStyle}>
                    <b> Past Events</b>
                </Typography>
            </Box>

            <Box m={5}>
                <Grid container spacing={6}>
                    {pevent.map((post)=>(
                        <Grid item xs={12} sm={6} md={6}>
                            <Card style={{minwidth:200}} className={classes.card}>
                                <CardContent>
                                    <Grid container spacing={5}>
                                        <Grid item xs={6} style={gridStyle}>
                                            <Tooltip title={post.name}>
                                                <img src={wkndevnt1} height='100%' width='100%' alt="Old Age Home" />
                                            </Tooltip>
                                        </Grid>
                                        <Grid item xs={6} style={gridStyle}>
                                            <p align="left">
                                                <br></br>
                                                <b>{post.name}</b>
                                                <br></br>
                                                Event ID: {post.event_id}
                                                <br></br>
                                                Venue: {post.venue}
                                                <br></br>
                                                Date: {moment(post.start_time).format('MMMM Do YYYY')}
                                                <br></br>
                                                Start-Time: {moment(post.start_time).format('h:mm a')}
                                                <br></br>
                                                End-Time: {moment(post.end_time).format('h:mm a')}
                                                <br></br>
                                            </p>
                                            
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <Grid align="right">
                    <Button style={btnStyle} color='primary' variant='contained'>Go To Home Page</Button>
                </Grid>
            </Box>
        </Box>

    )
}

export default PastEvents;
