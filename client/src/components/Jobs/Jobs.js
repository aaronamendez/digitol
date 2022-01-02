import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '../../styled-components/';
import { Link } from 'react-router-dom';

const initialJobs = [];
const initialSearch = {
	value: '',
};

const Jobs = () => {
	const [jobs, setJobs] = useState(initialJobs);
	const [search, setSearch] = useState(initialSearch);

	const change = (e) => {
		const { name, value } = e.target;
		setSearch({ ...search, [name]: value });
	};

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/jobs')
			.then((res) => {
				setJobs(res.data);
			})
			.catch((err) => console.error(err));
	}, []);
	return (
		<div className="component-container">
			<h1>Jobs</h1>
			<div className="component-nav">
				<Input
					type="text"
					name="value"
					placeholder="Search Job"
					onChange={change}
					value={search.value}
				/>
				<Button>Create New Job</Button>
			</div>
			{/* Supplies and cleaners searcb fix needed*/}
			{jobs
				.filter((val) => {
					if (search.value === '') {
						return val;
					} else if (
						`#${val.id}`.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					} else if (
						val.client.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					} else if (
						val.address.toLowerCase().includes(search.value.toLowerCase())
					) {
						return val;
					} else if (
						val.startTime
							.toString()
							.toLowerCase()
							.includes(search.value.toLowerCase())
					) {
						return val;
					} else if (
						val.price
							.toString()
							.toLowerCase()
							.includes(search.value.toLowerCase())
					) {
						return val;
					}
				})
				.map((job, idx) => {
					return (
						<Link to={`/jobs/${job.id}`} key={idx}>
							<div className="component-inner-card" id={job.id}>
								<ul>
									<li>ID: #{job.id}</li>
									<li>Client: {job.client}</li>
									<li>Address: {job.address}</li>
									{job.cleaners.map((cleaner, idx) => {
										return <li key={idx}>{cleaner}</li>;
									})}
									<li>Start Time: {job.startTime}</li>
									<li>Price: {job.price}</li>
									<li>Supplies: {job.supplies ? 'Yes' : 'No'}</li>
								</ul>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default Jobs;
