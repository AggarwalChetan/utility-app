import React from 'react';

class EncoderDecoder extends React.Component {
    constructor(props) {
        super(props);
    }


    homePage = () => {
        window.location = '/';
    }
    
    render() {
        return (
            <>
                <header>
                    <button className="home-button" onClick={this.homePage}>Home</button>
                </header>
            </>
        )
    }
}

export default EncoderDecoder;