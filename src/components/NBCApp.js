import React from 'react';
import BTDModal from './BTDModal';
import BTHModal from './BTHModal';
import BTOModal from './BTOModal';

import DTBModal from './DTBModal';
import DTHModal from './DTHModal';
import DTOModal from './DTOModal';

import HTBModal from './HTBModal';
import HTDModal from './HTDModal';
import HTOModal from './HTOModal';

import OTBModal from './OTBModal';
import OTHModal from './OTHModal';
import OTDModal from './OTDModal';

class NBCApp extends React.Component {
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
                </header>

                <div className="home-container">
                    <BTDModal/>
                    <BTHModal/>
                    <BTOModal/>
                    <DTBModal/>
                    <DTHModal/>
                    <DTOModal/>
                    <HTBModal/>
                    <HTDModal/>
                    <HTOModal/>
                    <OTBModal/>
                    <OTDModal/>
                    <OTHModal/>
                </div>

            </>
        )
    }
}

export default NBCApp;