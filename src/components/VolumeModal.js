import React from 'react';
import Modal from 'react-modal';

class VolumeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
    }

    handleModalOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleModalClose = () => {
        this.setState({ modalOpen: false });
    }

    render() {
        return (
            <div className="Utility-app">
                <div onClick={this.handleModalOpen} className="Utiliy-content">Volume Converter</div>
                <Modal className="modal" isOpen={this.state.modalOpen}>
                    <div className="modal-container">
                        <div className="drop-down-container">
                            <input text="number" placeholder="From..."></input>
                            <select className="drop-down">
                                <option>m^3</option>
                                <option>km^3</option>
                                <option>cm^3</option>
                                <option>mm^3</option>
                            </select>
                        </div>
                        <div className="drop-down-container">
                            <input text="number" placeholder="To..."></input>
                            <select className="drop-down">
                                <option>m^3</option>
                                <option>km^3</option>
                                <option>cm^3</option>
                                <option>mm^3</option>
                            </select>
                        </div>
                        <div className="button-container">
                            <button className="closebutton" onClick={this.handleModalClose}>Close</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default VolumeModal;