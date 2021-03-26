import React from 'react';

class EDApp extends React.Component {
    constructor(props) {
        super(props);
    }

    homePage = () => {
        window.location = '/';
    }

    redirectEncodeDecode = () => {
        window.location = '/EDecoder/UREncoderDecoder';
    }

    redirectBase64Encode = () => {
        window.location = '/EDecoder/Base64Encode';
    }

    redirectBase64Decode = () => {
        window.location = '/EDecoder/Base64Decode';
    }

    render() {
        return (
            <>
                <header>
                    <button className="home-button" onClick={this.homePage}>Home</button>
                    <div className="utility-header">Utility Apps</div>
                </header>


                <div className="ED-UApp-container">
                    <div onClick={this.redirectEncodeDecode} className="UApp">
                        <div className="UApp-content">URL Encode / Decode</div>
                    </div>
                    <div className="UAppOverview">
                        <div className="UAppOverview-content">
                            <li>URL encoding converts characters into a format that can be transmitted over the Internet.
                            URLs can only be sent over the Internet using the ASCII character-set.
                                URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.</li>
                            <li>URL decoding reverses the encoding</li>
                        </div>
                    </div>

                    <div onClick={this.redirectBase64Encode} className="UApp">
                        <div className="UApp-content">Base64 Encode / Decode</div>
                    </div>
                    <div className="UAppOverview">
                        <div className="UAppOverview-content">
                            <li>Base 64 is one of the technique we use to encode the binary data into characters.
                            We don't send binary data directly over the network, because we never know some protocols may interpret and screwed up the data.</li>
                            <li>Decoding reverses the encoding</li>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EDApp;