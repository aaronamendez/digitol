import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '../../styled-components/';

const Clients = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/clients')
			.then((res) => {
				setClients(res.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="component-container">
			<h1>Clients</h1>
			<div className="component-nav">
				<Input type="text" placeholder="Search Client" />
				<Button>Search</Button>
				<Button>Create New Client</Button>
			</div>

			{clients.map((client, idx) => {
				return (
					<div className="component-inner-card" key={idx}>
						<ul key={idx}>
							<li>ID: {client.id}</li>
							<li>Name: {client.name}</li>
							<li>Address: {client.address}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Clients;
