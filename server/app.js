const express = require('express');
const md5 = require('md5');
const app = express();
const sha1 = require('js-sha1');
const { sha256 } = require('js-sha256');
const { sha512 } = require('js-sha512');
const router = express.Router();

router.use(express.json());

// Encode-url
router.post('/encode-url', (req, res) => {
    const url = req.body.str;
    res.send({str : encodeURIComponent(url)});
});


// Decode-url
router.post('/decode-url', (req, res) => {
    const url = req.body.str;
    res.send({str : decodeURIComponent(url)}); 
});


//base64-encode
router.post('/base64-encode', (req, res) => {
    const str = req.body.str;
    res.send({str : `${Buffer.from(str).toString('base64')}`});
});

//base64-decode
router.post('/base64-decode', (req, res) => {
    const str = req.body.str;
    res.send({str : `${Buffer.from(str, 'base64').toString()}`});
})

//md5
router.post('/md5', (req, res) => {
    const data = req.body.str;
    res.send(md5(data));
})

//sha-1
router.post('/sha-1', (req, res) => {
    const data = req.body.str;
    res.send(sha1(data));
})

//sha-256
router.post('/sha-256', (req, res) => {
    const data = req.body.str;
    res.send(sha256(data));
})

//sha-512
router.post('/sha-512', (req, res) => {
    const data = req.body.str;
    res.send(sha512(data));
})

//base64-encode
router.post('/json', (req, res) => {
    res.send(JSON.stringify(req.body, null, "\t"));
});

module.exports = router;