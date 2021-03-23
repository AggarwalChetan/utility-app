import React from 'react';
import Modal from 'react-modal';

class SpeedModal extends React.Component {
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
                <div onClick={this.handleModalOpen} className="Utiliy-content">Speed Converter</div>
                <Modal className="modal" isOpen={this.state.modalOpen}>
                    <div className="modal-container">
                        <button className="closebutton" onClick={this.handleModalClose}>X</button>
                        <div className="drop-down-container">
                            <input text="number" placeholder="From..."></input>
                            <select className="drop-down">
                                <option>m/s</option>
                                <option>km/h</option>
                                <option>mi/h</option>
                                <option>m/h</option>
                                <option>km/s</option>
                                <option>cm/h</option>
                                <option>cm/s</option>
                            </select>
                        </div>
                        <div className="drop-down-container">
                            <input text="number" placeholder="To..."></input>
                            <select className="drop-down">
                                <option>m/s</option>
                                <option>km/h</option>
                                <option>mi/h</option>
                                <option>m/h</option>
                                <option>km/s</option>
                                <option>cm/h</option>
                                <option>cm/s</option>
                            </select>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default SpeedModal;