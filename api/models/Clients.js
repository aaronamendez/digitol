export const CLIENT_DATA = {
	clients: [
		{
			id: 1,
			name: 'Construction Builders LLC',
			address: '905 West 42nd Street',
			jobs: [
				{
					id: 1,
					cleaners: ['Lazlo', 'Sarah'],
					startTime: 'January 1, 2022: 10:00 EST',
					price: '$320',
					supplies: true,
				},
			],
		},
		{
			id: 2,
			name: 'DigitalGenSolutions',
			address: '975 Roosevelt Avenue',
			jobs: [
				{
					id: 2,
					cleaners: ['Sarah', 'Guadalupe'],
					startTime: 'January 3, 2022: 9:00 EST',
					price: '$320',
					supplies: false,
				},
			],
		},
		{
			id: 3,
			name: 'Locksmith Paragon',
			address: 'West 4th street',
			jobs: [
				{
					id: 3,
					cleaners: ['Lazlo', 'Guadalupe'],
					startTime: 'January 5, 2022: 15:00 EST',
					price: '$320',
					supplies: true,
				},
			],
		},
	],
};
