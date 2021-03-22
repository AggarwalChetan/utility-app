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
          <Utility app="Encoders / Decoders"/>
          <Utility app="Hash Generators"/>
          <Utility app="RGB / HEX Converters"/>
          <Utility app="Timestamp Converters"/>
          <Utility app="Unit Converters"/>
          <Utility app="Number Base Converters"/>
          <Utility app="String Utilities"/>
          <Utility app="JSON Validator"/>
        </div>
      </>
    )
  }



}

export default App;