import React from 'react';
import Modal from 'react-modal';

class OTBModal extends React.Component {
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
            <>
                <div onClick={this.handleModalOpen} className="Utility-app">
                    <div className="Utiliy-content">Octal To<br /> Binary</div>
                </div>
                <Modal className="modal" isOpen={this.state.modalOpen}>
                    <div className="NBC-modal-container">
                        <input text="number" placeholder="Octal..."></input>
                        <button className="NBC-button">Convert</button>
                        <input text="number" placeholder="Binary..."></input>
                        <div className="NBC-button-container">
                            <button className="NBC-closebutton" onClick={this.handleModalClose}>Close</button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}

export default OTBModal;