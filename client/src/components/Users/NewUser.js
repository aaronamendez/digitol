import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { v4 as uuid } from 'uuid';
import * as yup from 'yup';
import { addUserValidations } from '../../validations/schema';

import { BackButton } from '../../styled-components/';
import { Button } from '../../styled-components/';

const initialUser = {
	id: '',
	name: '',
	email: '',
	isAdmin: false,
	roles: [],
};

const initialDisabled = true;

const initialErrors = {
	name: '',
	email: '',
	isAdmin: false,
	roles: [],
};

const NewUser = () => {
	const [form, setForm] = useState(initialUser);
	const [disabled, setDisabled] = useState(initialDisabled);
	const [errors, setErrors] = useState(initialErrors);

	const navigate = useNavigate();

	const validateUser = (name, value) => {
		yup
			.reach(addUserValidations, name)
			.validate(value)
			.then(() => {
				setErrors({ ...errors, [name]: '' });
			})
			.catch((err) => {
				setErrors({ ...errors, [name]: err.errors[0] });
			});
	};

	const change = (e) => {
		const { value, name } = e.target;
		validateUser(name, value);
		setForm({ ...form, [name]: value });
	};

	const postNewUser = (newUser) => {
		axios
			.post('http://localhost:5000/api/users', newUser)
			.then(() => {
				navigate('/users');
			})
			.catch((err) => console.error(err));
	};

	const submit = (e) => {
		e.preventDefault();
		const newUser = {
			id: uuid(),
			name: form.clientName,
			email: form.email,
		};
		postNewUser(newUser);
	};

	useEffect(() => {
		addUserValidations.isValid(form).then((valid) => {
			setDisabled(!valid);
		});
	}, [form]);

	return (
		<div className="component-container">
			<h1>Create New User</h1>
			<div className="go-back">
				<Link to="/users">
					<BackButton>&laquo; Back</BackButton>
				</Link>
			</div>
			<div className="info-container">
				<form onSubmit={submit}>
					<div className="display-errors">
						<p>{errors.name}</p>
						<p>{errors.email}</p>
					</div>
					<label>User Name</label>
					<input
						type="text"
						name="name"
						placeholder="Enter Name"
						value={form.name}
						onChange={change}
					/>
					<label>Email</label>
					<input
						type="text"
						name="email"
						placeholder="Enter Email"
						onChange={change}
						value={form.email}
					/>

					<h4>Is the user an Admin?</h4>
					<label>Yes</label>
					<input type="radio" name="isAdmin" value="Yes" />
					<label>No</label>
					<input type="radio" name="isAdmin" value="No" />
					<h4>Assign Roles:</h4>
					<div className="roles">
						<label>Office Worker</label>
						<input type="checkbox" value="Office Worker" />
						<label>Customer Service</label>
						<input type="checkbox" value="Customer Service" />
						<label>Remote</label>
						<input type="checkbox" value="Remote" />
					</div>
					<div>
						<Button disabled={disabled}>Create</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewUser;
