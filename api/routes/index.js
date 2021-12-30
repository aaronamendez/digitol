const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
	res.json({
		name: 'melissa mendez',
		email: 'melissa@nyc.com',
	});
});

router.get('/api/clients', (req, res) => {
	const data = [
		{
			id: 1,
			name: 'Construction Builders LLC',
			address: '905 West 42nd Street',
		},
		{
			id: 2,
			name: 'DigitalGenSolutions',
			address: '975 Roosevelt Avenue',
		},
		{
			id: 3,
			name: 'Locksmith Paragon',
			address: 'West 4th street',
		},
	];

	res.json(data);
});

router.get('/api/users', (req, res) => {
	const data = [
		{
			id: 1,
			name: 'Melissa Evangelista',
			email: 'melissa@nyc.com',
			isAdmin: true,
			roles: ['Office Worker', 'Customer Service', 'Remote'],
		},
		{
			id: 2,
			name: 'Anna Marie',
			email: 'anna@nyc.com',
			isAdmin: false,
			roles: ['Office Worker', 'Customer Service', 'Remote'],
		},
		{
			id: 3,
			name: 'Rachel Israel',
			email: 'rachel@nyc.com',
			isAdmin: true,
			roles: ['Office Worker', 'Customer Service', 'Remote'],
		},
	];

	res.json(data);
});

module.exports = router;
