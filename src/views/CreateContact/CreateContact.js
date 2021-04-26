import { useHistory } from "react-router";

const { Grid } = require("@material-ui/core")
const { default: ContactForm } = require("components/ContactForm/ContactForm")


const CreateContactView = (props) =>{
    const history = useHistory();
    const saveContact = (contact)=> {
        let contacts = JSON.parse(localStorage.getItem('contacts'));
        if(!contacts)
            contacts = [];
        contact.id = contacts.length + 1;
        contacts.push(contact)
        localStorage.setItem('contacts',JSON.stringify(contacts))
        history.push("/")
    }

    return (
    <Grid container justify='center'>
        Create Contact.

        <Grid container item xs={10}>
            <ContactForm handleSubmit={saveContact}></ContactForm>
        </Grid>
    </Grid>
    );
};

export default CreateContactView;