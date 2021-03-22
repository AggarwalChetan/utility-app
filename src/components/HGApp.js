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
            </>
        )
    }
}

export default HGApp; 