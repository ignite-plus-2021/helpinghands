import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import imgl from './Helping_hands.jpeg';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
//import home from './home';
import logo from './logo.jpg';



const Login = ({ handleChange }) => {

    const paperStyle={padding :'30px 20px',width:300, margin:"30px auto", border:"solid black"}
    const headStyle={margin:0,fontFamily:'san-serif',color:'blue'}
    const btnstyle = { margin: '8px 0' }
    const imgstyle={height:100,width:180}
    const initialValues = {
        email: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    let history = useHistory();
    const onSubmit = (values, props) => {
        const user={
           email:values.email,
           password:values.password  }
           
           console.log(user)
        
        axios.post("http://localhost:8081/account/login", user)
        .then((response) => {
            var res = response.status;
            console.log(response.data.role)
            console.log(response.status)
            if (res === 200) {
                
                history.push('/home');
            }

        })
        .catch((error) => {
            if (error.response.status === 403) {
                console.log(error.response.data.message);
                alert("Invalid email or Password ")
                props.resetForm()
            }
            else
                alert("Something went wrong")
            console.log(error)
        });
        
          
          
    }
            /*.then((response) => {
                var res = response.status;
                console.log(response.data)
                console.log(response.status)
                if (res === 200) {
                    alert("Logged in")
                    history.push('./home');
                }

            })
            .catch((error) => {
                if (error.response.status === 403) {
                    console.log(error.response.data.message);
                    alert("Invalid emailid or password")

                    props.resetForm()
                }
                else
                    alert("Something went wrong")
                console.log(error)
            });}*/
    

      
    
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                <div>
                <img src={logo} style={imgstyle} alt=""/>
                
                </div>
                    <h2 style={headStyle}>Login</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Email Id' name="email"
                                placeholder='Enter Email Id' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Login"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     {/*<Link href="Register" onClick={() => handleChange("event", 1)} >
                        Sign Up
                            </Link>*/}
                <a href="Register">Signup</a>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login