import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PhoneBookView from 'views/PhoneBook/PhoneBook'
import EditContactView from 'views/EditContact/EditContact'
import CreateContactView from 'views/CreateContact/CreateContact'


let browserHistory = createBrowserHistory();

const Routes = () => {
    return (
        <BrowserRouter history={browserHistory}>
            <Switch>
                <Route path="/" exact component={PhoneBookView} />
                <Route path="/edit/:id" component={EditContactView} />
                <Route path="/create-contact" component={CreateContactView} />
            </Switch>
        </BrowserRouter>
    )
};
export default Routes;
