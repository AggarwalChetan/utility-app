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
                        <button className="closebutton" onClick={this.handleModalClose}>X</button>
                        <input text="number" placeholder="From..."></input>
                        <input text="number" placeholder="To..."></input>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default TemperatureModal;