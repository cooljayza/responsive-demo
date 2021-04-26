import { Button, FormControl, Grid, InputLabel, makeStyles, OutlinedInput } from "@material-ui/core"
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2,0),
      },
      backgroundColor:'white',
    },
  }));

const ContactForm = (props) => {
    const classes = useStyles();
    let firstName = props.firstName ? props.firstName : ""
    let lastName = props.lastName ? props.lastName : ""
    let email = props.email ? props.email : ""
    let phoneNumber = props.phoneNumber ? props.phoneNumber : ""

    let [contact,setContact] = useState({firstName,lastName,email,phoneNumber})
    
    const handleChange = (event)=> {
        let newContact = {...contact}
        newContact[event.target.id] = event.target.value
        setContact(newContact)
    }

    const handleSubmit = () => {
        if(props.handleSubmit){
            props.handleSubmit(contact);
        }
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                    <OutlinedInput id="firstName" value={contact.firstName} onChange={handleChange}  label="firstName" />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                    <OutlinedInput id="lastName" value={contact.lastName} onChange={handleChange} label="lastName" />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined">Email Address</InputLabel>
                    <OutlinedInput id="email" value={contact.email} onChange={handleChange} label="email" />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined">Phone Number</InputLabel>
                    <OutlinedInput id="phoneNumber" value={contact.phoneNumber} onChange={handleChange} label="Name" />
                </FormControl>
               <Grid item xs={12} container justify='flex-end' alignItems='center' style={{margin:'10px 0px',paddingBottom:'20px'}}>
                    <Button color='primary' variant="contained" onClick={handleSubmit}>Submit</Button>
               </Grid>
            </form>
        </div>
    )
}

export default ContactForm