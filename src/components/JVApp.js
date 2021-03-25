import React from 'react';

class JVApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "inputStr": '', "outputStr": '' };
    }

    homePage = () => {
        window.location = '/';
    }

    handleJSON = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    beautify = () => {
        fetch('/api/json/', {
            method : "POST",
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body : `${this.state.inputStr}`
        })
        .then(resp => resp.text())
        .then(resp => {this.setState({outputStr : resp})})
    }


    render() {
        return (
            <>
                <header>
                    <button className="home-button" onClick={this.homePage}>Home</button>
                </header>
                <div className="json">
                    <textarea name="inputStr" value={this.state.inputStr} placeholder="Enter the text you want to decode..." onChange={this.handleJSON}></textarea>
                    <div className="base64-decode-button-container">
                        <button onClick={this.beautify}>Beautify</button>
                        <button onClick={() => this.setState({ outputStr: '' , inputStr: '' })}>Reset</button>
                    </div>
                    <textarea name="outputStr" value={this.state.outputStr} placeholder="Your result will appear here..."></textarea>
                </div>

            </>
        )
    }
}

export default JVApp;