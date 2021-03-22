import React from 'react';

class UCApp extends React.Component{
    constructor(props){
        super(props);
    }

    homePage = () => {
        window.location='/';
    }

    render(){
        return (
            <>
            <header>
                <button className="home-button" onClick={this.homePage}>Home</button>
            </header>

            <div className="home-container">
                <div className="Utility-app">
                    <div className="Utiliy-content">Length Converter</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Area<br/> Converter</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Volume Converter</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Weight Converter</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Speed Converter</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Rotation Converter</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Temperature Converter</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Pressure Converter</div>
                </div>
            </div>

            </>
        )
    }
}

export default UCApp; 