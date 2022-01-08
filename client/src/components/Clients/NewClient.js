import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import * as yup from 'yup';

import { BackButton } from '../../styled-components/';
import { Button } from '../../styled-components/';

import { addClientValidations } from '../../validations/schema';

const initialClient = {
	id: '',
	clientName: '',
	address: '',
};

const initialDisabled = true;

const initialErrors = {
	clientName: '',
	address: '',
};

const NewClient = () => {
	const [form, setForm] = useState(initialClient);
	const [disabled, setDisabled] = useState(initialDisabled);
	const [errors, setErrors] = useState(initialErrors);

	let navigate = useNavigate();

	const validateClient = (name, value) => {
		yup
			.reach(addClientValidations, name)
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
		validateClient(name, value);
		setForm({ ...form, [name]: value });
	};

	const postNewClient = (newClient) => {
		axios
			.post('http://localhost:5000/api/clients', newClient)
			.then(() => {
				navigate('/clients');
			})
			.catch((err) => console.error(err));
	};

	const submit = (e) => {
		e.preventDefault();
		const newClient = {
			id: uuid(),
			name: form.clientName,
			address: form.address,
		};
		postNewClient(newClient);
	};

	useEffect(() => {
		addClientValidations.isValid(form).then((valid) => {
			setDisabled(!valid);
		});
	}, [form]);

	return (
		<div className="component-container">
			<h1>Create New Client</h1>
			<div className="go-back">
				<Link to="/clients">
					<BackButton>&laquo; Back</BackButton>
				</Link>
			</div>
			<div className="info-container">
				<form onSubmit={submit}>
					<div className="display-errors">
						<p>{errors.clientName}</p>
						<p>{errors.address}</p>
					</div>
					<label>Client Name</label>
					<input
						type="text"
						name="clientName"
						placeholder="Enter Name"
						onChange={change}
					/>
					<label>Address</label>
					<input
						type="text"
						name="address"
						placeholder="Enter Address"
						onChange={change}
					/>
					<Button disabled={disabled}>Create</Button>
				</form>
			</div>
		</div>
	);
};

export default NewClient;
