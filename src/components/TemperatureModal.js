import React from 'react';
import Modal from 'react-modal';

class TemperatureModal extends React.Component {
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
                <div onClick={this.handleModalOpen} className="Utiliy-content">Temperature Converter</div>
                <Modal className="modal" isOpen={this.state.modalOpen}>
                    <div className="modal-container">
                        <div className="drop-down-container">
                            <input text="number" placeholder="From..."></input>
                            <select className="drop-down">
                                <option>k</option>
                                <option>c</option>
                                <option>f</option>
                            </select>
                        </div>
                        <div className="drop-down-container">
                            <input text="number" placeholder="To..."></input>
                            <select className="drop-down">
                                <option>k</option>
                                <option>c</option>
                                <option>f</option>
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

export default TemperatureModal;