import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '../../styled-components/';
import { Link } from 'react-router-dom';
import './index.css';

const initialClients = [];
const initialSearch = {
	value: '',
};

const Clients = () => {
	const [clients, setClients] = useState(initialClients);
	const [search, setSearch] = useState(initialSearch);

	const change = (e) => {
		const { name, value } = e.target;
		setSearch({ ...search, [name]: value });
	};

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
				<Input
					type="text"
					name="value"
					placeholder="Search Client"
					onChange={change}
					value={search.value}
				/>
				{/* <Button>Search</Button> */}
				<Link to="/clients/new">
					<Button>Create New Client</Button>
				</Link>
			</div>

			{clients
				.filter((val) => {
					if (search.value === '') {
						return val;
					} else if (
						val.name.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					} else if (
						val.address.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					} else if (
						`#${val.id}`.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					}

					return null;
				})
				.map((client, idx) => {
					return (
						<Link className="test" to={`/clients/${client.id}`} key={idx}>
							<div className="component-inner-card" id={client.id}>
								<ul key={idx}>
									<li>ID: #{client.id}</li>
									<li>Name: {client.name}</li>
									<li>Address: {client.address}</li>
								</ul>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default Clients;
