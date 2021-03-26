import React from 'react';
import Modal from 'react-modal';

class LengthModal extends React.Component {
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
                    <div className="Utiliy-content">Length Converter</div>
                </div>
                <Modal className="modal" isOpen={this.state.modalOpen}>
                    <div className="modal-container">
                        <div className="drop-down-container">
                            <input text="number" placeholder="From..."></input>
                            <select className="drop-down">
                                <option>m</option>
                                <option>km</option>
                                <option>dm</option>
                                <option>cm</option>
                                <option>mm</option>
                                <option>µm</option>
                                <option>nm</option>
                            </select>
                        </div>
                        <div className="drop-down-container">
                            <input text="number" placeholder="To..."></input>
                            <select className="drop-down">
                                <option>m</option>
                                <option>km</option>
                                <option>dm</option>
                                <option>cm</option>
                                <option>mm</option>
                                <option>µm</option>
                                <option>nm</option>
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

export default LengthModal;