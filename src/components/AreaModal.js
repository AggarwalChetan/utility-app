import React from 'react';
import Modal from 'react-modal';

class AreaModal extends React.Component {
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
                <div onClick={this.handleModalOpen} className="Utiliy-content">Area<br /> Converter</div>
                <Modal className="modal" isOpen={this.state.modalOpen}>
                    <div className="modal-container">
                        <div className="drop-down-container">
                            <input text="number" placeholder="From..."></input>
                            <select className="drop-down">
                                <option>m^2</option>
                                <option>km^2</option>
                                <option>cm^2</option>
                                <option>mm^2</option>
                                <option>µm^2</option>
                                <option>ha</option>
                            </select>
                        </div>
                        <div className="drop-down-container">
                            <input text="number" placeholder="To..."></input>
                            <select className="drop-down">
                                <option>m^2</option>
                                <option>km^2</option>
                                <option>cm^2</option>
                                <option>mm^2</option>
                                <option>µm^2</option>
                                <option>ha</option>
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

export default AreaModal;