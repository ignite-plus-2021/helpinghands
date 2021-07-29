import React, { useEffect, useState } from 'react';
import {Grid, Paper, Button, Typography,  Step, Stepper} from '@material-ui/core';

//import {KeyboardArrowLeft, KeyboardRight} from '@material-ui/icons';

import {Formik, Form } from 'formik';
import logo from './HH-logo.jpg';
import wkndevnt1 from './img1.jpg';
import wkndevnt2 from './img2.jpg';
import axios from 'axios';


const PastEvents = (props) => {
    const paperStyle = {padding:'10px 10px',  border:''}
    const headStyle = {margin:'0', fontFamily:'serif', color:'blue'}
    const btnStyle = {margin:'8px 0' }
    const logoStyle = {height:98, width:128}
    const imgStyle = {height:'90%', width:'90%'}
    //const stepperStyle = {}

    //var maxSteps = (3);

    /*const tutorialSteps = [
        {label:'1', imgPath:'./img1.jpg',},
        {label:'2', imgPath:'./Screenshot 2021-07-27 152014.jpg',},
        {label:'3', imgPath:'./old-age-home-batu-pahat-cartoon.jpg',},
    ]*/
    /*const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        if(activeStep < 2)
            setActiveStep((currentStep) => currentStep + 1);
    };
    const handleBack = () => {
        if(activeStep !== -1)
            setActiveStep((currentStep) => currentStep - 1);
    };*/

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

    
    return(
        <Grid padding='20px 20px'>
            <Paper style={paperStyle} elevation={1}>
                <Grid align='center'>
                    <img src={logo} style={logoStyle} alt="Logo" />
                </Grid>
                <Grid item xs={12} align='left'>
                <Typography>
                    <h2 style={headStyle}>Past Events</h2>
                </Typography>
                </Grid>
                <br></br>
                <br></br>
                <div style={{columnCount:2}} >
                    <Grid item xs={12} sm={6}>
                        <Formik >
                            {(props) => (
                                <Form disabled={true} >
                                   
                                    <Stepper  variant="text"  >
                                        <Step>
                                            <img src={'./img1.jpg'} alt="1" />
                                        </Step>
                                        <Step>
                                            <img src={'./Screenshot 2021-07-27 152014.jpg'} alt="2" />
                                        </Step>
                                        <Step>
                                            <img src={'./old-age-home-batu-pahat-cartoon.jpg'} alt="3" />
                                        </Step>
                                    </Stepper>
                                    <Button size="large" color="solid black" onClick > 《  </Button>
                                    <Button size="large" color="solid black" onClick >  》 </Button>  
                                    
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                pevent.map(post => (
                                    <p key={post.id}>
                                        Event {post.event_id}: {post.name}
                                        <br></br>
                                        Date: {post.start_time} - {post.end_time}
                                        <br></br>
                                        Venue: {post.venue}
                                        <br></br>
                                        About: {post.description}
                                    </p>
                                ))
                            )}
                        </Formik>
                    </Grid>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div style={{columnCount:2}}>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                    
                                    <img src={wkndevnt2} style={imgStyle} alt="Green Earth" />
                                    
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                pevent.map(post => (
                                    <p key={post.id}>
                                        Event {post.event_id}: {post.name}
                                        <br></br>
                                        Date: {post.start_time} - {post.end_time}
                                        <br></br>
                                        Venue: {post.venue}
                                        <br></br>
                                        About: {post.description}
                                    </p>
                                ))
                            )}
                        </Formik>
                    </Grid>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Grid align='right' item xs={6} sm={3}>
                    <br></br>
                    <Button style={btnStyle} color='primary' variant='contained' >Go To Home Page</Button>
                </Grid>
            </Paper>
        </Grid>    
    )
}

export default PastEvents;
