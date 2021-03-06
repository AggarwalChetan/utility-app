import React from 'react';

class TApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hr: 0, min: 5, sec: 0, setIntervalId: '', action: 'Start' };
    }

    homePage = () => {
        window.location = '/';
    }

    handleIncrement = () => {

        if(this.state.min == '00' && this.state.sec == '00'){
            return;
        }

        let data = this.state.sec;

        if (data == '00') {
            let minData = this.state.min;
            --minData;
            this.setState({ sec: 59, min: minData, hr: 0 });

            // if (minData === 60) {
            //     let hrData = this.state.hr;
            //     ++hrData;
            //     if (hrData === 24) {
            //         this.setState({ sec: 0, min: 0, hr: 0 });
            //     } else {
            //         this.setState({ sec: 0, min: 0, hr: hrData });
            //     }
            // } else {
            //     this.setState({ sec: 0, min: minData });
            // }
        } else {
            -- data;
            this.setState({ sec: data })
        }



    }

    handleSetInterval = () => {
        if (this.state.action === 'Start') {
            let id = setInterval(this.handleIncrement, 1000);
            this.setState({ setIntervalId: id, action: 'Stop' });
        } else {
            clearInterval(this.state.setIntervalId);
            this.setState({ action: 'Start' });
        }
    }

    handleClearInterval = () => {
        clearInterval(this.state.setIntervalId);
        this.setState({ hr: 0, min: 5, sec: 0, action: 'Start' })
    }

    handleDisplay = () => {
        // let hrAns = this.state.hr;
        // if (this.state.hr < 10) {
        //     hrAns = '0' + hrAns;
        // }

        let minAns = this.state.min;
        if (this.state.min < 10) {
            minAns = '0' + minAns;
        }

        let secAns = this.state.sec;
        if (this.state.sec < 10) {
            secAns = '0' + secAns;
        }

        return minAns + ":" + secAns;
    }

    render() {
        return (
            <>
                <header>
                    <button className="home-button" onClick={this.homePage}>Home</button>
                    <div className="utility-header">Utility Apps</div>
                </header>
                <div className="stopwatch-container">
                    <div className="stopwatch">{this.handleDisplay()}</div>
                    <div className="stopwatch-button-container">
                        <button onClick={this.handleSetInterval}>{this.state.action}</button>
                        <button onClick={this.handleClearInterval}>Reset</button>
                    </div>


                </div>

            </>
        )
    }
}

export default TApp;