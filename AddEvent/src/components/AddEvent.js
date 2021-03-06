import React from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useState } from 'react';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import * as Yup from 'yup';


import moment from 'moment';

var today = moment().toDate();





const Add_Event = () => {
    const paperStyle = { padding: '20px 20px', width: 800, height: 460, margin: "30px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '' }
    const btnStyle = {margin:'10px 5px 10px auto',display: 'flex', justify: 'space-between', alignItems: 'right' }
    const formStyle = { textAlign: 'center' }
    const initialValues = {
        eventName: '',
        eventType: '',
        eventDescription: '',
        eventVenue: '',
        eventDate: '',
        startTime: '',
        endTime: ''
    }
    const [value, setValue] = React.useState(new Date());

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // State to store uploaded file
    const [selectedFile, setSelectedFile] = useState(null);
    const [toast, setToast] = useState('');
    const fileSelectedHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    // Handles file upload event and updates state
    const fileUploadHandler = async () => {
        if (selectedFile != null) {
            console.log("upload: ", selectedFile);
            const fd = new FormData();
            fd.append('image', selectedFile, selectedFile.name);
            try {
                //put image upload API in url
                let url = '';
                const res = await axios.post(url, fd);
                const data = await res.data;
                console.log("Data: ", data);
                setToast("Image is Uploaded Successfully");
                setTimeout(() => {
                    setToast('');
                }, 1000);
            } catch (error) {
                console.log("Error: ", error);
                setToast("Image is not Uploaded");
                setTimeout(() => {
                    setToast('');
                }, 1000);
            }
        }
        else {
            // If no file selected the show alert
            alert('Please Select file first');
        }
    }


    let history = useHistory();
    const onCreate = (values, props) => {
        const event = {
            eventName: values.eventName,
            eventType: values.eventType,
            eventDescription: values.eventDescription,
            eventVenue: values.eventVenue,
            eventDate: values.eventDate,
            startTime: values.startTime,
            endTime: values.endTime
        }

        console.log(Event)
            // axios.post("http://localhost:8081/admin/AddEvent",event)
            .then((response) => {
                var resp = response.status;
                console.log(response.data)
                console.log(response.status)
                if (response == 200) {
                    alert("Events are created");
                    history.push('/');
                }
            })

            .catch((error) => {
                if (error.status.response == 400) {
                    console.log(error.response.data.message);
                    alert("Event already exist")
                    props.resetForm()
                }
                else
                    alert("Something went wrong")
                console.log(error)
            });


    }


    const eventSchema = Yup.object().shape({
        eventName: Yup.string()
            .matches(/[a-zA-Z][a-zA-Z\s]+/, "Event Name must be alphabetical..")
            .required,
        eventType: Yup.string().required,
        eventDescription: Yup.string().required,
        eventVenue: Yup.string().required
    });



    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddBoxIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Add Events</h2>

                </Grid>

                <Formik initialValues={initialValues} eventSchema={eventSchema} onSubmit={onCreate}>

                    {(props) => (
                        <Form style={formStyle}>

                            <div class="container">
                                <Grid container spacing={3}>

                                    <Grid item xs={6} sm={6}>

                                        <Field as={TextField} fullWidth label='Name' name='eventName' value={props.values.eventName}
                                            required error={props.errors.eventName && props.touched.eventName}
                                            helperText={<ErrorMessage name='eventName' />}
                                            onChange={props.handleChange} placeholder="Enter the name of event" required />
                                    </Grid>

                                    <Grid item xs={6}>

                                        <Field as={TextField} fullWidth label='Type' name='eventType' value={props.values.eventType}
                                            onChange={props.handleChange} placeholder="Enter the type of Event" required />


                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field as={TextField} id="standard-textarea" fullWidth label='Description' name='eventDescription' value={props.values.eventDescription}
                                            onChange={props.handleChange} placeholder="Enter the Description of Event" multiline required />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Field as={TextField} fullWidth label='Venue' name='eventVenue' value={props.values.eventVenue}
                                            onChange={props.handleChange} placeholder="Enter the Venue of Event" required />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Field as={TextField} fullWidth label='Start Date and Time' name='startTime' value={props.values.startTime}
                                            id="datetime-local" type="datetime-local" defaultValue="Default Value"
                                            defaultValue="2021-08-24T10:30" min="2021-08-24"

                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                            onChange={props.handleChange} placeholder="Enter the start time" required />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Field as={TextField} fullWidth label='End Date and Time' name='endTime' value={props.values.endTime}
                                            id="datetime-local" type="datetime-local" defaultValue="Default Value"
                                            defaultValue="2021-08-24T10:30" min="today"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                            onChange={props.handleChange} placeholder="Enter the end time" required />

                                    </Grid>

                                    <Grid item xs={6}>
                                        <input type="file" onChange={fileSelectedHandler} />
                                        <Button onClick={fileUploadHandler} variant='contained' color='secondary'
                                            style={{ float: 'right' }} startIcon={<CloudUploadIcon />} align='right'>Upload</Button>
                                        <div>
                                            {
                                                toast &&
                                                <p>{toast}</p>
                                            }
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <Grid container justify="flex-end">
                                <Button type='create' variant='contained' color='primary' style={btnStyle}>Create Event</Button>

                                <Snackbar
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    open={open}
                                    autoHideDuration={6000}
                                    onClose={handleClose}
                                    message="Event is created!!"
                                    action={
                                        <React.Fragment>
                                            <Button color="primary" size="small" onClick={handleClose}>
                                                UNDO
                                            </Button>
                                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                                <CloseIcon fontSize="small" />
                                            </IconButton>
                                        </React.Fragment>
                                    }
                                />
                            </Grid>

                        </Form>
                    )}
                </Formik>

            </Paper>
        </Grid>
    )
}


export default Add_Event;