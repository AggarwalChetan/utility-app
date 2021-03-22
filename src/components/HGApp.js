import React from 'react';

class HGApp extends React.Component{
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
                    <div className="UApp-content">MD5</div>
                </div>
                <div className="UApp">
                    <div className="UApp-content">SHA-1</div>
                </div>
                <div className="UApp">
                    <div className="UApp-content">SHA-256</div>
                </div>
                <div className="UApp">
                    <div className="UApp-content">SHA-512</div>
                </div>
            </div>
            </>
        )
    }
}

export default HGApp; 