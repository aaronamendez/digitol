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
	'Office Worker': false,
	'Customer Service': false,
	Remote: false,
};

const initialDisabled = true;

const initialErrors = {
	name: '',
	email: '',
	isAdmin: '',
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
		const { value, name, checked, type } = e.target;
		const valueToUse = type === 'checkbox' ? checked : value;
		validateUser(name, valueToUse);
		setForm({ ...form, [name]: valueToUse });
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
			name: form.name,
			email: form.email.trim(),
			isAdmin: form.isAdmin === 'yes' ? true : false,
			roles: ['Office Worker', 'Customer Service', 'Remote'].filter(
				(role) => !!form[role]
			),
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
					{/* RADIOS */}
					<h4>Is the user an Admin?</h4>
					<label>Yes</label>
					<input
						type="radio"
						name="isAdmin"
						value="yes"
						onChange={change}
						checked={form.isAdmin === 'yes'}
					/>
					<label>No</label>
					<input
						type="radio"
						name="isAdmin"
						value="no"
						onChange={change}
						checked={form.isAdmin === 'no'}
					/>
					{/* CHECKBOXES */}
					<h4>Assign Roles:</h4>
					<div className="roles">
						<label>Office Worker</label>
						<input
							type="checkbox"
							name="Office Worker"
							checked={form['Office Worker']}
							onChange={change}
						/>
						<label>Customer Service</label>
						<input
							type="checkbox"
							name="Customer Service"
							checked={form['Customer Service']}
							onChange={change}
						/>
						<label>Remote</label>
						<input
							type="checkbox"
							name="Remote"
							checked={form['Remote']}
							onChange={change}
						/>
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
