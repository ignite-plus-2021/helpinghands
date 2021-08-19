import React, {useState, useEffect} from 'react';
import {Grid, Paper, Box, Button, Card, CardContent, Select, NativeSelect, MenuItem, InputLabel, FormControl, FormHelperText, Tooltip, Typography, TextField, AppBar, IconButton, Toolbar , makeStyles} from '@material-ui/core';
import {ArrowBack, Home, Menu } from '@material-ui/icons';
import {Formik, Form, Field, ErrorMesage} from 'formik';
//import logo from './HH-logo.jpg';
import icon from './HH-icon.ico';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';

//import Dropdown from 'react-dropdown';

import es from 'date-fns/locale/es';
import moment from 'moment';
import axios from 'axios';


const EditEvents = (props) => {
    const paperStyle = {padding:'10px 25px', height:'auto', width:'auto', margin:'20px 25px', border:' black'}
    const gridStyle = {margin:'auto auto', padding:'auto auto'}
    const headStyle = {margin:'0', fontFamily:'sans-serif', color:'#8A2BE2'}
    const btnStyle = {margin:'15px 15px'}
    const logoStyle = {height:98, width:128}
    const iconStyle = {height:45, width:45}
    const formStyle = {width:'100%'}

    const [wevent, setWevent] = useState([])
    const event = "Weekend event"
    //const future=true
    useEffect(() => {
        axios.get('http://localhost:8081/account/events/getEventsList/true/Weekend event')
        //('http://localhost:8081/account/events/getEvents/'.concat('/isFutureEvent').concat('event'))
        //(`http://localhost:8081/account/events/getEventsList/isFutureEvent${future}/eventTypes${event}`)
        .then(response => {
            console.log(response)
            console.log(response.data[0].event_id)
            setWevent(response.data)
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

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const onSubmit = (values, props) => {
        const event = Object.create(values)
        axios.post("localhost:8081/")
    }

    const options = [
        { value: 'weekendevents', label: 'Weekend Events' },
        { value: 'webinarforNGOs', label: 'Webinar for NGOs' },
        { value: 'foodforthought', label: 'Food for Thought' },
        { value: 'artsandcraft', label: 'Arts & Craft' },
      ];

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
              margin: theme.spacing(1),
            },
        },
        homeButton: {
            marginRight: theme.spacing(2),
        },
        backButton: {
            marginLeft: theme.spacing(1),
        },
        button:{
            color:"primary",
            '&:hover':{
                backgroundColor:"#2471A3",
            },
            marginTop:"8px"
        }
    }));

    const classes = useStyles();

    return (
        <Box >
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton align='center' edge="start" className={classes.homeButton} color="inherit" aria-label="Home">
                        <img src={icon} style={iconStyle} alt='HH' />
                    </IconButton>
                    <Typography>
                        <b>Helping Hands</b>
                    </Typography>
                </Toolbar>
            </AppBar>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid style={gridStyle} >
                    <Paper style={paperStyle} elevation={2}>
                        <Grid item xs={12} align='center'>
                            <br />
                            <Typography variant='h4' style={headStyle}>
                                <b>Edit Events</b>
                            </Typography>
                            <br /><br />
                        </Grid>

                        <FormControl style={formStyle} variant="outlined" align="center">
                            <InputLabel>Event Type</InputLabel>
                            <NativeSelect label="Event Type" >
                                <option align-items='center' value="" />
                                <option value="weekendevent">Weekend Event</option>
                                <option disabled value="webinarforngo">Webinars for NGO</option>
                                <option disabled value="artsandcraft">Arts &amp; Craft</option>
                                <option disabled value="foodforthought">Food for Thought</option>
                            </NativeSelect>
                            <FormHelperText>Find event by type</FormHelperText>
                            <br />
                        </FormControl>

                        <Grid container spacing={4}>
                            {wevent.map((post)=>(
                                <Grid item xs={12} >
                                    <Card style={{minwidth:200}} className={classes.card}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid style={gridStyle}>
                                                    <Formik>
                                                        {(props) => (
                                                            <Form >
                                                                <p align="left">
                                                                    <Field as={TextField} fullWidth label="Event Name" name="eventname" value={post.name} required />
                                                                    <br /><br />
                                                                    <Field as={TextField} fullWidth label="Venue" name="venue" value={post.venue} required />
                                                                    <br /><br />
                                                                    <TextField
                                                                        id="standard-multiline-static"
                                                                        label="Description"
                                                                        name="description"
                                                                        multiline
                                                                        fullWidth
                                                                        maxRows={4}
                                                                        defaultValue={post.description}
                                                                        required
                                                                    />
                                                                </p>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </Grid>
                                                 
                                                <Grid style={gridStyle}>
                                                    <Formik>
                                                        {(props) => (
                                                            <Form >
                                                                <p align="left">
                                                                    <TextField
                                                                        id="standard-read-only-input"
                                                                        label="Event ID"
                                                                        defaultValue={post.event_id} 
                                                                        inputProps={{readOnly: true,}}
                                                                    />
                                                                    <br />                                                  
                                                                    <KeyboardDatePicker
                                                                        disableToolbar
                                                                        disablePast
                                                                        variant="inline"
                                                                        format="MMM dd yyyy"
                                                                        margin="normal"
                                                                        id="date-picker-inline"
                                                                        label="Date"
                                                                        defaultValue={moment(post.start_time)}
                                                                        required
                                                                        onChange={handleDateChange}
                                                                        KeyboardButtonProps = {{
                                                                            'aria-label': 'change date',
                                                                        }}
                                                                    />
                                                                    <br /><br />
                                                                    <Field as={TextField} fullWidth label="Start Time" name="starttime" value={moment(post.start_time).format('h:mm a')} required />
                                                                    <br /><br />
                                                                    <Field as={TextField} fullWidth label="End Time" name="endtime" value={moment(post.end_time).format('h:mm a')} required />
                                                                    <br />
                                                                </p>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </Grid>
                                            </Grid>
                                        </CardContent>

                                        <Button type='submit' style={btnStyle} color='primary' align='right' variant='contained' >
                                            Save Changes
                                        </Button>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </MuiPickersUtilsProvider>
        </Box>
    )
}

export default EditEvents;
