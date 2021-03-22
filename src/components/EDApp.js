import React from 'react';

class EDApp extends React.Component{
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

            <div className="UApp-container">
                <div className="UApp">
                    <div className="UApp-content">URL Encode / Decode</div>
                </div>
                <div className="UApp">
                    <div className="UApp-content">Base64 Decode</div>
                </div>
                <div className="UApp">
                    <div className="UApp-content">Base64 Encode</div>
                </div>
            </div>
            </>
        )
    }
}

export default EDApp; 