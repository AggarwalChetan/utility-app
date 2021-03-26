import React from 'react';
import Modal from 'react-modal';
import AreaModal from './AreaModal';
import LengthModal from './LengthModal';
import PressureModal from './PressureModal';
import RotationModal from './RotationModal';
import SpeedModal from './SpeedModal';
import TemperatureModal from './TemperatureModal';
import VolumeModal from './VolumeModal';
import WeightModal from './WeightModal';

class UCApp extends React.Component {
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

                <div className="home-container">
                    <LengthModal />
                    <AreaModal />
                    <VolumeModal />
                    <WeightModal />
                    <SpeedModal />
                    <RotationModal />
                    <TemperatureModal />
                    <PressureModal />
                </div>

            </>
        )
    }
}

export default UCApp;