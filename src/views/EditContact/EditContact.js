import { useHistory } from "react-router"

const { Grid } = require("@material-ui/core")
const { default: ContactForm } = require("components/ContactForm/ContactForm")

const EditContactView = (props) => {
    const id = parseInt(document.location.pathname.split('/')[2])
    const history = useHistory()
    const handleSaveEdit = (contact) => {
        let contacts = JSON.parse(localStorage.getItem('contacts'))
        contacts = contacts.filter((e)=> {
            return e.id !== id
        })
        contact.id = id
        contacts.push(contact)
        localStorage.setItem('contacts',JSON.stringify(contacts))
        history.push('/')
    }
    
    
    let contacts = JSON.parse(localStorage.getItem('contacts'))
    let contact = contacts.find(c => c.id === id)
        
    return (
        
        <Grid container justify='center'>
            Edit Contact.

            <Grid container xs={10} item>
                <ContactForm firstName={contact?.firstName} 
                 lastName={contact?.lastName}
                 email={contact?.email} handleSubmit={handleSaveEdit}
                 phoneNumber={contact?.phoneNumber}/>
            </Grid>
        </Grid>
    )
}

export default EditContactView;