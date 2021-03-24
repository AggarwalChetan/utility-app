import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Base64Encode from './components/Base64Encode';
import EDApp from './components/EDApp';
import EncoderDecoder from './components/EncoderDecoder';
import HGApp from './components/HGApp';
import JVApp from './components/JVApp';
import MD5 from './components/MD5';
import NBCApp from './components/NBCApp';
import RHCApp from './components/RHCApp';
import SHA1 from './components/SHA1';
import SHA256 from './components/SHA256';
import SHA512 from './components/SHA512';
import SUApp from './components/SUApp';
import TCApp from './components/TCApp';
import UCApp from './components/UCApp';

function Application(){
    return (
        <Router>
            <Switch>
                <Route exact path = '/' component={App}/>
                <Route exact path = '/EDecoder' component={EDApp}/>
                <Route exact path = '/EDecoder/UREncoderDecoder' component = {EncoderDecoder}/>
                <Route exact path = '/EDecoder/Base64Encode' component={Base64Encode}/>
                <Route exact path = '/HashGenerator' component={HGApp}/>
                <Route exact path = '/HashGenerator/MD5' component={MD5}/>
                <Route exact path = '/HashGenerator/SHA-1' component={SHA1}/>
                <Route exact path = '/HashGenerator/SHA-256' component={SHA256}/>
                <Route exact path = '/HashGenerator/SHA-512' component={SHA512}/>
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