import React from 'react';

class Base64Encode extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "inputStr": '', "outputStr": '' };
    }

    homePage = () => {
        window.location = '/';
    }

    handleBase64Encoder = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    encodeApi = () => {
        fetch('/api/base64-encode/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ "str": `${this.state.inputStr}` })
        })
            .then(resp => resp.json())
            .then(resp => this.setState({ outputStr: `${resp.str}` }));
    }

    decodeApi = () => {
        fetch('/api/base64-decode/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ "str": `${this.state.inputStr}` })
        })
            .then(resp => resp.json())
            .then(resp => this.setState({ outputStr: `${resp.str}` }));
    }




    render() {
        return (
            <>
                <header>
                    <button className="home-button" onClick={this.homePage}>Home</button>
                    <div className="utility-header">Utility Apps</div>
                </header>

                <div className="base64-decode">
                    <textarea name="inputStr" value={this.state.inputStr} placeholder="Enter the text you want to decode..." onChange={this.handleBase64Encoder}></textarea>
                    <div className="base64-decode-button-container">
                        <button onClick={this.encodeApi}>Encode</button>
                        <button onClick={() => this.setState({ outputStr: '', inputStr: '' })}>Reset</button>
                        <button onClick={this.decodeApi}>Decode</button>
                    </div>
                    <textarea name="outputStr" value={this.state.outputStr} placeholder="Your result will appear here..."></textarea>
                </div>
            </>
        )
    }
}

export default Base64Encode;