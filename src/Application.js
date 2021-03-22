import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';
import EDApp from './components/EDApp';
import HGApp from './components/HGApp';
import JVApp from './components/JVApp';
import NBCApp from './components/NBCApp';
import RHCApp from './components/RHCApp';
import SUApp from './components/SUApp';
import TCApp from './components/TCApp';
import UCApp from './components/UCApp';

function Application(){
    return (
        <Router>
            <Switch>
                <Route exact path = '/' component={App}/>
                <Route exact path = '/EDecoder' component={EDApp}/>
                <Route exact path = '/HashGenerator' component={HGApp}/>
                <Route exact path = '/RHConverter' component={RHCApp}/>
                <Route exact path = '/TConverter' component={TCApp}/>
                <Route exact path = '/UConverter' component={UCApp}/>
                <Route exact path = '/NBConverter' component={NBCApp}/>
                <Route exact path = '/SUtilities' component={SUApp}/>
                <Route exact path = '/JValidator' component={JVApp}/>
            </Switch>
        </Router>
    )
}

export default Application;