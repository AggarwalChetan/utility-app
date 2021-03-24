import React from 'react';

class SHA1 extends React.Component {
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
                        <button>SHA-1</button>
                        <button>Reset</button>
                    </div>
                    <textarea placeholder="Your result will appear here..."></textarea>
                </div>
            </>
        )
    }
}

export default SHA1;