const express = require('express');
const router = express.Router();

const USER_DATA = require('../models/Users');
const CLIENT_DATA = require('../models/Clients');
const JOB_DATA = require('../models/Jobs');

router.get('/api/clients', (req, res) => {
	res.json(CLIENT_DATA);
});

router.post('/api/clients', (req, res) => {
	const { id, name, address } = req.body;
	const obj = {
		id,
		name,
		address,
	};
	console.log(obj);
	CLIENT_DATA.push(obj);
	res.json({ msg: 'Client Created!' });
});

router.get('/api/jobs', (req, res) => {
	res.json(JOB_DATA);
});

router.get('/api/users', (req, res) => {
	res.json(USER_DATA);
});

module.exports = router;
