import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import { BackButton } from '../../styled-components/index';

const initialUser = {};

const User = () => {
	const { userId } = useParams();
	const [user, setUser] = useState(initialUser);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:5000/api/users')
			.then((res) => {
				res.data.filter((obj) => {
					if (`${obj.id}` === userId) {
						// console.log(obj);
						setUser(obj);
					} else {
						return null;
					}
				});
			})
			.catch((err) => setError(err))
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Data is loading ...</p>;
	}

	if (error || !Array.isArray(user.roles)) {
		return <p>There was an error loading your data.</p>;
	}

	return (
		<div className="component-container">
			<h1>User Information</h1>
			<div className="go-back">
				<Link to="/users">
					<BackButton>&laquo; Back</BackButton>
				</Link>
			</div>
			<div className="info-container">
				<h2>{user.name}</h2>
				<div className="row-container">
					<div className="row">
						<p>User ID: {user.id}</p>
						<p>User Name: {user.name}</p>
						<p>Email: {user.email}</p>
						<p>Admin/Mod: {user.isAdmin ? 'Admin' : 'Mod'}</p>
					</div>
					<div className="row">
						<h4>Roles:</h4>
						<div>
							{user.roles.map((role, idx) => (
								<p key={idx}>{role}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
