import React from 'react';

class EncoderDecoder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputStr : '', outputStr : ''};
    }

    handleURLChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    encodeURL = () => {
        fetch('/api/encode-url/', {
            method : "POST",
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body : JSON.stringify({str : `${this.state.inputStr}`})
        })
        .then(resp => resp.json())
        .then(resp => this.setState({outputStr : `${resp.str}`}))
    }

    decodeURL = () => {
        fetch('/api/decode-url/', {
            method : "POST",
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body : JSON.stringify({str : `${this.state.inputStr}`})
        })
        .then(resp => resp.json())
        .then(resp => this.setState({outputStr : `${resp.str}`}))
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
                    <textarea name ="inputStr" onChange={this.handleURLChange} placeholder="Enter the text you want to decode..."></textarea>
                    <div className="base64-decode-button-container">
                        <button onClick={this.encodeURL}>Encode url</button>
                        <button onClick={() => this.setState({ outputStr: '', inputStr: '' })}>Reset</button>
                        <button onClick={this.decodeURL}>Decode url</button>
                    </div>
                    <textarea value={this.state.outputStr} placeholder="Your result will appear here..."></textarea>
                </div>
            </>
        )
    }
}

export default EncoderDecoder;