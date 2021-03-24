import React from 'react';

class EDApp extends React.Component{
    constructor(props){
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

    render(){
        return (
            <>
            <header>
                <button className="home-button" onClick={this.homePage}>Home</button>
            </header>

            <div className="ED-UApp-container">
                <div onClick={this.redirectEncodeDecode} className="UApp">
                    <div className="UApp-content">URL Encode / Decode</div>
                </div>
                <div className="UAppOverview">
                    <div className="UAppOverview-content">
                            <li>URL encoding stands for encoding certain characters in a URL by replacing them with one or more 
                                character triplets that consist of the percent character "%" followed by two hexadecimal digits. 
                                The two hexadecimal digits of the triplet(s) represent the numeric value of the replaced character.</li>
                    </div>
                </div>

                <div onClick={this.redirectBase64Encode} className="UApp">
                    <div className="UApp-content">Base64 Encode</div>
                </div>
                <div className="UAppOverview">
                    <div className="UAppOverview-content">
                        <li>The term Base 64 is generic, and there are many implementations. MIME, which stands for Multi-Purpose Internet Mail Extensions, is the most common 
                            that is seen today. It is used to transmit attachments via email over the Simple Mail Transfer Protocol (SMTP). Other examples of Base64 encoding are 
                            Radix-64 and YUI's Y64. Encoding data in Base64 results in it taking up roughly 33% more space than the original data.</li>
                    </div>
                </div>
                <div onClick={this.redirectBase64Decode} className="UApp">
                    <div className="UApp-content">Base64 Decode</div>
                </div>
                <div className="UAppOverview">
                <div className="UAppOverview-content">
                    <li>Base64 is a way of representing binary data in an ASCII string.
                            ‘Base64 decoding’ is the process of transforming a base64 representation — a string of odd-looking text — back into the original binary or text data.</li>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default EDApp; 