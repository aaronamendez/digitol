const express = require('express');
const router = express.Router();

const USER_DATA = require('../models/Users');
const CLIENT_DATA = require('../models/Clients');
const JOB_DATA = require('../models/Jobs');

// GET REQUESTS
router.get('/api/clients', (req, res) => {
	res.json(CLIENT_DATA);
});

router.get('/api/jobs', (req, res) => {
	res.json(JOB_DATA);
});

router.get('/api/users', (req, res) => {
	res.json(USER_DATA);
});

// POST REQUESTS
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

router.post('/api/users', (req, res) => {
	const { id, name, email, isAdmin, roles } = req.body;
	const obj = {
		id,
		name,
		email,
		isAdmin,
		roles,
	};
	console.log(obj.roles);
	USER_DATA.push(obj);
	res.send({ msg: 'User created!' });
});

module.exports = router;
