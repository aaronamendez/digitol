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

router.get('/api/jobs', (req, res) => {
	const data = [
		{
			id: 1,
			client: 'Construction Builders LLC',
			address: '905 West 42nd Street',
			cleaners: ['Lazlo', 'Sarah'],
			startTime: 'January 1, 2022: 10:00 EST',
			price: '$320',
			supplies: true,
		},
		{
			id: 2,
			client: 'DigitalGenSolutions',
			address: '975 Roosevelt Avenue',
			cleaners: ['Sarah', 'Guadalupe'],
			startTime: 'January 3, 2022: 9:00 EST',
			price: '$320',
			supplies: false,
		},
		{
			id: 3,
			client: 'Locksmith Paragon',
			address: 'West 4th street',
			cleaners: ['Lazlo', 'Guadalupe'],
			startTime: 'January 5, 2022: 15:00 EST',
			price: '$320',
			supplies: true,
		},
	];

	res.json(data);
});

router.get('/api/users', (req, res) => {
	const data = [
		{
			id: 1,
			name: 'Melissa',
			email: 'melissa@nyc.com',
			isAdmin: true,
			roles: ['Office Worker', 'Customer Service', 'Remote'],
		},
		{
			id: 2,
			name: 'Annamaria',
			email: 'anna@nyc.com',
			isAdmin: true,
			roles: ['Office Worker', 'Customer Service', 'Remote'],
		},
		{
			id: 3,
			name: 'Rachel',
			email: 'rachel@nyc.com',
			isAdmin: true,
			roles: ['Office Worker', 'Customer Service', 'Remote'],
		},
		{
			id: 4,
			name: 'Lazlo',
			email: 'lazlo@nyc.com',
			isAdmin: false,
			roles: ['Office Worker', 'Customer Service', 'Remote'],
		},
		{
			id: 5,
			name: 'Sarah',
			email: 'sarah@nyc.com',
			isAdmin: false,
			roles: ['Service Provider', 'Cleaner'],
		},
		{
			id: 6,
			name: 'Guadalupe',
			email: 'guadalupe@nyc.com',
			isAdmin: false,
			roles: ['Service Provider', 'Cleaner'],
		},
	];

	res.json(data);
});

module.exports = router;
