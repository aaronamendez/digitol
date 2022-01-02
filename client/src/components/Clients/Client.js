import React from 'react';
import { useParams } from 'react-router-dom';

const Client = () => {
	// console.log(useParams());
	const { clientId } = useParams();
	return (
		<div className="component-container">
			<h1>Client with an id of #{clientId}</h1>
		</div>
	);
};

export default Client;
