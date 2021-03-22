import React from 'react';

class JVApp extends React.Component{
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

export default JVApp; 