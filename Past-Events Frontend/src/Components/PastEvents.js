import React, {useEffect, useState} from 'react';
import {Grid, Paper, Button, Typography, Tooltip, Table, TableRow, TableCell } from '@material-ui/core';
import {Formik, Form} from 'formik';
import logo from './HH-logo.jpg';
import wkndevnt1 from './img1.jpg';
import wkndevnt2 from './img2.jpg';
import moment from 'moment';
import axios from 'axios';

const PastEvents = (props) => {
    const paperStyle = {padding:'10px 25px', margin:'25px auto', border:'none'}
    const headStyle = {margin:'0', fontFamily:'serif', color:'blue'}
    const btnStyle = {margin:'8px 0' }
    const logoStyle = {height:98, width:128}
    const imgStyle = {height:'100px', width:'180px'}
    const tableRowStyle = {border:'white'}
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

    //var date = '20010704T120854'
    
    return(
        <Grid padding='10px 10px'>
            <Paper style={paperStyle} elevation={0}>
                <Grid align='center'>
                    <img src={logo} style={logoStyle} alt="Logo" />
                </Grid>
                <Grid item xs={12} align='left'>
                    <Typography>
                        <h2 style={headStyle}>Past Events</h2>
                    </Typography>
                </Grid>
                
                <div  >
                    <Grid>
                        <Table>
                            <TableRow style={tableRowStyle}>
                                <TableCell >
                                    <Tooltip title="Old Age Home">
                                        <img src={wkndevnt1} style={imgStyle} alt="Old Age Home" />
                                    </Tooltip> 
                                </TableCell>
                                <TableCell align='left'>            
                                    <Formik>
                                        {(props) => (
                                            pevent.map(post => (
                                                <p key={post.id=0}>
                                                    <ul align='left'>
                                                        <b>{post.name}</b>
                                                        <br></br>
                                                        Event ID: {post.event_id}
                                                        <br></br>
                                                        Date:   {moment(post.start_time).format('LLLL')}
                                                        <br></br>
                                                        Venue:  {post.venue}
                                                        <br></br>
                                                        About:  {post.description}
                                                    </ul>
                                                </p>
                                            ))
                                        )}
                                    </Formik>
                                </TableCell>
                            </TableRow>
                            <TableRow style={tableRowStyle}>
                                <TableCell >
                                    <Tooltip title="Green Earth">
                                        <img src={wkndevnt2} style={imgStyle} alt="Green Earth" />
                                    </Tooltip>
                                </TableCell>
                                <TableCell align='left'>
                                    <Formik>
                                        {(props) => (
                                            pevent.map(post => (
                                                <p key={post.id=1}>
                                                    <ul align='left'>
                                                        <b>{post.name}</b>
                                                        <br></br>
                                                        Event ID: {post.event_id}
                                                        <br></br>
                                                        Date:   {moment(post.start_time).format('LLLL')}
                                                        <br></br>
                                                        Venue:  {post.venue}
                                                        <br></br>
                                                        About:  {post.description}
                                                    </ul>
                                                </p>
                                            ))
                                        )}
                                    </Formik>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </Grid>
                </div>
                <br></br>
                <Grid align='right'>
                    <Button style={btnStyle} color='primary' variant='contained' >Go To Home Page</Button>
                </Grid>
            </Paper>
        </Grid>    
    )
}

export default PastEvents;
