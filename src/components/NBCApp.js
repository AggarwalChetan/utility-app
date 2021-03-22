import React from 'react';

class NBCApp extends React.Component{
    constructor(props){
        super(props);
    }

    homePage = () => {
        window.location='/';
    }

    render(){
        return (
            <>
            <header>
                <button className="home-button" onClick={this.homePage}>Home</button>
            </header>

            <div className="home-container">
                <div className="Utility-app">
                    <div className="Utiliy-content">Binary To<br/> Decimal</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Binary To<br/> Hex</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Binary To<br/> Octal</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Decimal To<br/> Binary</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Decimal To<br/> Hex</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Decimal To<br/> Octal</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Hex To<br/> Binary</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Hex To<br/> Decimal</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Hex To<br/> Octal</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Octal To<br/> Binary</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Octal To<br/> Decimal</div>
                </div>
                <div className="Utility-app">
                    <div className="Utiliy-content">Octal To<br/> Hex</div>
                </div>
            </div>

            </>
        )
    }
}

export default NBCApp; 