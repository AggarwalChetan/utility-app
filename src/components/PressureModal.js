import React from 'react';
import Modal from 'react-modal';

class PressureModal extends React.Component {
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
                    <div className="Utiliy-content">Pressure Converter</div>
                </div>
                <Modal className="modal" isOpen={this.state.modalOpen}>
                    <div className="modal-container">
                        <div className="drop-down-container">
                            <input text="number" placeholder="From..."></input>
                            <select className="drop-down">
                                <option>Pa</option>
                                <option>kPa</option>
                                <option>bar</option>
                                <option>psi</option>
                                <option>ksi</option>
                                <option>atm</option>
                            </select>
                        </div>
                        <div className="drop-down-container">
                            <input text="number" placeholder="To..."></input>
                            <select className="drop-down">
                                <option>Pa</option>
                                <option>kPa</option>
                                <option>bar</option>
                                <option>psi</option>
                                <option>ksi</option>
                                <option>atm</option>
                            </select>
                        </div>
                        <div className="button-container">
                            <button className="closebutton" onClick={this.handleModalClose}>Close</button>
                        </div>
                    </div>
                </Modal>
            </>

        )
    }

}

export default PressureModal;