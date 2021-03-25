import React from 'react';
import Utility from './Utility'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {utilityApps : 6}
  }


  homePage = () => {
    window.location='/';
  }

  render(){
    return(
      <>
        <header>
          <button className="home-button" onClick={this.homePage}>Home</button>
        </header>

        <div className="home-container">
          <Utility utilityApp = "EDecoder" app="Encoders / Decoders"/>
          <Utility utilityApp = "HashGenerator" app="Hash Generators"/>
          <Utility utilityApp = "RHConverter" app="RGB / HEX Converters"/>
          <Utility utilityApp = "UConverter" app="Unit Converters"/>
          <Utility utilityApp = "NBConverter" app="Number Base Converters"/>
          <Utility utilityApp = "SWatch" app="Stopwatch"/>
          <Utility utilityApp = "Timer" app="Timer"/>
          <Utility utilityApp = "JValidator" app="JSON Beautify"/>
        </div>
      </>
    )
  }



}

export default App;