import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Contacts from "components/Contacts.js/Contacts";

const useStyles = makeStyles({
    root: {
        '& > *': {
        marginBottom: '18px'
        }
    }
});

const PhoneBookView = (props) => {
    const classes = useStyles()
    let contacts = JSON.parse(localStorage.getItem('contacts'))
    
    return (
        <div className={classes.root}>
            Phone Books.
            <Grid container>
                <Typography>
                    <Link to='/create-contact'>Create Contact</Link>
                </Typography>
            </Grid>
            <Contacts data={contacts}></Contacts>
        </div>
    )
}

export default PhoneBookView;