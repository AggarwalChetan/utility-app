import React from 'react';

class Utility extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Utility-app">
                <div className="Utiliy-content">{this.props.app}</div>
            </div>
        )
    }

}

export default Utility;