import React from 'react';

class SHA512 extends React.Component {
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
                <div className="base64-decode">
                    <textarea placeholder="Enter the text you want to decode..."></textarea>
                    <div className="base64-decode-button-container">
                        <button>Encode url</button>
                        <button>Decode url</button>
                    </div>
                    <textarea placeholder="Your result will appear here..."></textarea>
                </div>
            </>
        )
    }
}

export default SHA512;