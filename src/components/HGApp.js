import React from 'react';

class HGApp extends React.Component {
    constructor(props) {
        super(props);
    }

    homePage = () => {
        window.location = '/';
    }

    redirectToMD5 = () => {
        window.location = '/HashGenerator/MD5';
    }

    redirectToSHA1 = () => {
        window.location = '/HashGenerator/SHA-1';
    }

    redirectToSHA512 = () => {
        window.location = '/HashGenerator/SHA-512';
    }

    redirectToSHA256 = () => {
        window.location = '/HashGenerator/SHA-256';
    }

    render() {
        return (
            <>
                <header>
                    <button className="home-button" onClick={this.homePage}>Home</button>
                </header>

                <div className="ED-UApp-container">
                    <div onClick={this.redirectToMD5} className="UApp">
                        <div className="UApp-content">MD5</div>
                    </div>
                    <div className="UAppOverview">
                        <div className="UAppOverview-content">
                            <li>This MD5 hash generator is useful for encoding passwords, credit cards numbers and other sensitive date into MySQL, Postgress or other databases. 
                                PHP programmers, ASP programmers and anyone developing on MySQL, SQL, Postgress or similar should find this online tool an especially handy resource.</li>
                        </div>
                    </div>

                    <div onClick={this.redirectToSHA1} className="UApp">
                        <div className="UApp-content">SHA-1</div>
                    </div>
                    <div className="UAppOverview">
                        <div className="UAppOverview-content">
                            <li>SHA-1 (Secure Hash Algorithm) is a 160 bit cryptographic hash function created by the NSA in 1995. 
                                It creates a 40 byte hash value for the input of the algorithm. SHA-1 is one-way, meaning that the original input cannot be be determined 
                                simply by knowing the hash value. SHA-1 was designed to be collision resistant, meaning that two inputs could not have the same hash value.</li>
                        </div>
                    </div>

                    <div onClick={this.redirectToSHA256} className="UApp">
                        <div className="UApp-content">SHA-256</div>
                    </div>
                    <div className="UAppOverview">
                        <div className="UAppOverview-content">
                            <li>The SHA-256 algorithm is one flavor of SHA-2 (Secure Hash Algorithm 2), which was created by the National Security Agency in 2001 as a successor to SHA-1. 
                                SHA-256 is a patented cryptographic hash function that outputs a value that is 256 bits long.</li>
                        </div>
                    </div>

                    <div onClick={this.redirectToSHA512} className="UApp">
                        <div className="UApp-content">SHA-512</div>
                    </div>
                    <div className="UAppOverview">
                        <div className="UAppOverview-content">
                            <li>The SHA-256 algorithm is one flavor of SHA-2 (Secure Hash Algorithm 2), which was created by the National Security Agency in 2001 as a successor to SHA-1. 
                                SHA-256 is a patented cryptographic hash function that outputs a value that is 256 bits long.</li>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HGApp;