import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';

function Application(){
    return (
        <Router>
            <Switch>
                <Route exact path = '/' component={App}/>
            </Switch>
        </Router>
    )
}

export default Application;