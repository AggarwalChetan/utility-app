import React from 'react';

class SWApp extends React.Component {
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
                    <div className="utility-header">Utility Apps</div>
                </header>

            </>
        )
    }
}

export default SWApp;