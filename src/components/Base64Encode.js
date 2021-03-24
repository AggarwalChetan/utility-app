import React from 'react';

class Base64Encode extends React.Component {
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

export default Base64Encode;