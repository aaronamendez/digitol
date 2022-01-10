import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '../../styled-components/';
import { Link } from 'react-router-dom';

const Users = () => {
	const initialUsers = [];
	const initialSearch = {
		value: '',
	};

	const [users, setUsers] = useState(initialUsers);
	const [search, setSearch] = useState(initialSearch);

	const change = (e) => {
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
					onChange={change}
					placeholder="Search User"
				/>
				<Link to={'/users/new'}>
					<Button>Create New User</Button>
				</Link>
			</div>
			{/* Same fix for previos filter, isAdmin and roles (binary, array) */}
			{users
				.filter((val) => {
					if (search.value === '') {
						return val;
					} else if (
						`#${val.id}`.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					} else if (
						`#${val.name}`.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					} else if (
						`#${val.email}`.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					}

					return null;
				})
				.map((user, idx) => {
					return (
						<Link to={`/users/${user.id}`} key={idx}>
							<div className="component-inner-card" id={user.id}>
								<h2>{user.name}</h2>
								<ul>
									<li>#{user.id}</li>
									<li>{user.name}</li>
									<li>{user.email}</li>
									<li>{user.isAdmin ? 'Admin' : 'Not Admin'}</li>
									{user.roles.map((role, idx) => {
										return <li key={idx}>{role}</li>;
									})}
								</ul>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default Users;
