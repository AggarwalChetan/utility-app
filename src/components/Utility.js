import React from 'react';

class Utility extends React.Component{
    constructor(props){
        super(props);
    }

    utilityApp = () => {
        window.location = `/${this.props.utilityApp}`
    }

    render(){
        return(
            <div onClick={this.utilityApp} className="Utility-app">
                <div className="Utiliy-content">{this.props.app}</div>
            </div>
        )
    }

}

export default Utility;