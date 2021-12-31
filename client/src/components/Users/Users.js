import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '../../styled-components/';

const Users = () => {
	const initialUsers = [];
	const initialSearch = {
		value: '',
	};

	const [users, setUsers] = useState(initialUsers);
	const [search, setSearch] = useState(initialSearch);

	const onChange = (e) => {
		const { name, value } = e.target;
		setSearch({ ...search, [name]: value });
	};

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/users')
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="component-container">
			<h1>Users</h1>
			<div className="component-nav">
				<Input
					type="text"
					name="value"
					value={search.value}
					onChange={onChange}
					placeholder="Search Client"
				/>
				<Button>Search</Button>
				<Button>Create New User</Button>
			</div>
			{users.map((user, idx) => {
				return (
					<div className="component-inner-card" key={idx}>
						<h2>{user.name}</h2>
						<ul>
							<li>{user.name}</li>
							<li>{user.email}</li>
							<li>{user.isAdmin ? 'Admin' : 'Not Admin'}</li>
							{user.roles.map((role, idx) => {
								return <li key={idx}>{role}</li>;
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Users;
