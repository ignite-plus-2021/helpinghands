import React from 'react';

import {Grid,  Paper, Button, IconButton, Dialog, Typography} from '@material-ui/core';

//import SimpleImageSlider from 'react-simple-image-slider';

import {Formik, Form, Field,} from 'formik';
import logo from './HH-logo.jpg';
import wkndevnt1 from './img1.jpg';
import wkndevnt2 from './img2.jpg';
import axios from 'axios';
//import styled from 'styled-components';

/*const images = [
    { url: "./img1.jpg" },
    { url: "./istockphoto-518197647-1024x1024.jpg" },
    { url: "./20210605_155233.jpeg" },
    
  ];*/

const PastEvents = (props) => {
    const paperStyle = {padding:'10px 10px',  height:'90%', width:'90%', border:''}
    const headStyle = {margin:'0', fontFamily:'serif', color:'blue'}
    const btnStyle = {margin:'8px 0' }
    const logoStyle = {height:98, width:128}
    const imgStyle = {height:'90%', width:'90%'}

    const dialogStyle = {margin:1, padding:1}

    /*const DialogContent = withStyles((theme) => {
        const dialogContentStyle = { padding: theme.spacing(2) }
    })(MuiDialogContent);

    const DialogActions = withStyles((theme) => {
        const dialogActionsStyle = { margin: 0, padding: theme.spacing(1) }
    })(MuiDialogActions);*/

    const handleClick = () => {
        setOpen(true);
    };


    /*const handleChange = () => {
        props.history.push('/home)')
    }*/

    /*var pastEvents
    console.log(pastEvents)
    axios.post("localhost:8080/account/event/eventType/pastEvents", pastEvents)
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        if(error.response.status===400 || error.response.status===401) {
            console.log(error.response.data.message)
        }
        else {
            console.log("Oop! Something went wrong")
        }
    })*/

    return(
        <Grid padding='20px 20px'>
            <Paper style={paperStyle} elevation={0}>
                <Grid align='center'>
                    <img src={logo} style={logoStyle} alt="Logo" />
                </Grid>

                <Grid item xs={6} sm={3}>
                <Typography>
                    <h2 style={headStyle}>Past Events </h2>
                </Typography>
                </Grid>
                <br></br>
                <br></br>
                <div style={{columnCount:2}}>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                    <img src={wkndevnt1} style={imgStyle} onClick={handleClick} alt="Restore Our Earth" />



                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                    <Field as={Date} />
                                </Form>
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
                                    <img src={wkndevnt2} style={imgStyle} onClick={handleClick} alt="Animal Shelter" />
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                    <Field as={Date} />
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </div>
                
                <br></br>
                <br></br>
                <br></br>
                <Grid align='right' item xs={6} sm={3}>
                    <Button style={btnStyle} color='primary' variant='contained' >Go To Home Page</Button>
                </Grid>
            </Paper>
        </Grid>
            
    )
}

export default PastEvents;
