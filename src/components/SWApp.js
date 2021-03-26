import React from 'react';

class SWApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hr : '00', min : '00', sec : '00'};
    }

    homePage = () => {
        window.location = '/';
    }

    render() {
        return (
            <>
                <header>
                    <button className="home-button" onClick={this.homePage}>Home</button>
                    <div className="utility-header">Utility Apps</div>
                </header>
                <div className="stopwatch-container">
                    <div className="stopwatch">{this.state.hr + ":" + this.state.min + ":" + this.state.sec}</div>
                    <div className="stopwatch-button-container">
                        <button>Start</button>
                        <button>Reset</button>
                    </div>
                    

                </div>

            </>
        )
    }
}

export default SWApp;