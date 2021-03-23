import React from 'react';
import Modal from 'react-modal';

class RotationModal extends React.Component {
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
                <div onClick={this.handleModalOpen} className="Utiliy-content">Rotation Converter</div>
                <Modal className="modal" isOpen={this.state.modalOpen}>
                    <div className="modal-container">
                        <button className="closebutton" onClick={this.handleModalClose}>X</button>
                        <div className="drop-down-container">
                            <input text="number" placeholder="From..."></input>
                            <select className="drop-down">
                                <option>deg</option>
                                <option>rad</option>
                            </select>
                        </div>
                        <div className="drop-down-container">
                            <input text="number" placeholder="To..."></input>
                            <select className="drop-down">
                                <option>deg</option>
                                <option>rad</option>
                            </select>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default RotationModal;