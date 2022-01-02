import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
	const { userId } = useParams();
	return (
		<div className="component-container">
			<h1>User with an id of #{userId}</h1>
		</div>
	);
};

export default User;
