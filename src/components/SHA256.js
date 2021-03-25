import React from 'react';

class SHA1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputStr: '', outputStr: '' };
    }

    homePage = () => {
        window.location = '/';
    }

    sha256 = () => {
        fetch('/api/sha-1/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ str: `${this.state.inputStr}` })
        })
            .then(resp => resp.json())
            .then(resp => this.setState({ outputStr: `${resp.str}` }))
    }

    handleSha256 = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <>
                <header>
                    <button className="home-button" onClick={this.homePage}>Home</button>
                </header>
                <div className="base64-decode">
                    <textarea name="inputStr" value={this.state.inputStr} onChange={this.handleSha256} placeholder="Enter the input..."></textarea>
                    <div className="base64-decode-button-container">
                        <button onClick={this.sha256}>SHA-256</button>
                        <button onClick={() => this.setState({ outputStr: '', inputStr: '' })}>Reset</button>
                    </div>
                    <textarea value={this.state.outputStr} placeholder="Your result will appear here..."></textarea>
                </div>
            </>
        )
    }
}

export default SHA1;