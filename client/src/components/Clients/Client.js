import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import { BackButton } from '../../styled-components/index';

const Client = () => {
	// console.log(useParams());
	const { clientId } = useParams();
	const [client, setClient] = useState({});

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/clients')
			.then((res) => {
				res.data.filter((obj) => {
					if (`${obj.id}` === clientId) {
						// console.log(obj);
						setClient(obj);
					} else {
						return null;
					}
				});
			})
			.catch((err) => console.error(err));
	}, []);
	// If the returned data gets complicated, remember to set isloading and setErrors
	// for array methods like mapping
	return (
		<div className="component-container">
			<h1>Client Information</h1>
			<div className="go-back">
				<Link to="/clients">
					<BackButton>&laquo; Back</BackButton>
				</Link>
			</div>
			<div className="info-container">
				<h2>{client.name}</h2>
				<p>Client ID: {client.id}</p>
				<p>Client Address: {client.address}</p>
			</div>
		</div>
	);
};

export default Client;
