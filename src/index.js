import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Routes from "Routes";
import "assets/scss/style.scss";
import swDev from './swDev';
import { Container, Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
     backgroundColor: '#f5f5f5',
     minHeight: '100vh',
     padding:'0px'
    },
    header: {
        paddingTop:'10px',
        marginBottom: '10px',
        backgroundColor: '#1976d2',
        fontSize: '18px'
    }
});

const App = (props)=> {
   const classes = useStyles() 
   return (
    <Container maxWidth="xs" className={classes.root}>
        <Grid container item xs={12} justify="center" className={classes.header}>
            <p>
                Phone Book App
            </p>
        </Grid>
        <Routes/>
    </Container>
   )
}

ReactDOM.render(
<App/>
, document.getElementById("root"));

swDev();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
