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
				<Link to={'/jobs/new'}>
					<Button>Create New Job</Button>
				</Link>
			</div>
			<div className="jobs-container">
				{jobs
					.filter((val) => {
						if (search.value === '') {
							return val;
						} else if (
							`#${val.id}`.toLowerCase().includes(search.value.toLowerCase())
						) {
							return val;
						} else if (
							val.name.toLowerCase().includes(search.value.toLowerCase())
						) {
							return val;
						} else if (
							val.address.toLowerCase().includes(search.value.toLowerCase())
						) {
							return val;
						} else if (
							val.startTime.toLowerCase().includes(search.value.toLowerCase())
						) {
							return val;
						} else if (
							val.supplies === true &&
							search.value.toLowerCase().includes('yes')
						) {
							return val;
						} else if (
							val.supplies === false &&
							search.value.toLowerCase().includes('no')
						) {
							return val;
						} else if (
							val.price.toLowerCase().includes(search.value.toLowerCase())
						) {
							return val;
						}
						return null;
					})
					.map((job, idx) => {
						return (
							<Link to={`/jobs/${job.id}`} key={idx}>
								<div className="component-inner-card" id={job.id}>
									<h2>Job ID: #{job.id}</h2>
									<div>
										<h3>{job.name}</h3>
										<h3>{job.address}</h3>
									</div>

									<ul>
										<li>Start Time: {job.startTime}</li>
										<li>Supplies Needed: {job.supplies ? 'Yes' : 'No'}</li>
										<li>Price: ${job.price}</li>
										<h4>Cleaners:</h4>
										{job.cleaners
											.filter((val) => {
												if (
													val.name
														.toLowerCase()
														.includes(search.value.toLowerCase())
												) {
													return val;
												} else {
													return null;
												}
											})
											.map((cleaner) => {
												return (
													<div key={cleaner.id}>
														<li>{cleaner.name}</li>
													</div>
												);
											})}
									</ul>
								</div>
							</Link>
						);
					})}
			</div>
			{/* {jobs.map((job, idx) => {
				return (
					<div key={idx}>
						{job.jobs
							.filter((val) => {
								if (
									`#${val.id}`
										.toLowerCase()
										.includes(search.value.toLowerCase())
								) {
									return val;
								} else if (
									job.name.toLowerCase().includes(search.value.toLowerCase())
								) {
									return val;
								} else if (
									job.address.toLowerCase().includes(search.value.toLowerCase())
								) {
									return val;
								} else if (
									val.startTime
										.toLowerCase()
										.includes(search.value.toLowerCase())
								) {
									return val;
								} else if (
									val.supplies === true &&
									search.value.toLowerCase().includes('yes')
								) {
									return val;
								} else if (
									val.supplies === false &&
									search.value.toLowerCase().includes('no')
								) {
									return val;
								} else if (
									val.price.toLowerCase().includes(search.value.toLowerCase())
								) {
									return val;
								}

								// Maybe filter by cleaner as well?
							})
							.map((job, idx) => {
								return (
									<Link to={`/jobs/${job.id}`} key={idx}>
										<div className="component-inner-card" id={job.id}>
											<h2>Job ID: #{job.id}</h2>
											<div>
												<h3>{job.name}</h3>
												<h3>{job.address}</h3>
											</div>

											<ul>
												<li>Start Time: {job.startTime}</li>
												<li>Supplies Needed: {job.supplies ? 'Yes' : 'No'}</li>
												<li>Price: ${job.price}</li>
												<h4>Cleaners:</h4>
												{job.cleaners.map((cleaner) => {
													return (
														<div key={cleaner.id}>
															<li>{cleaner.name}</li>
														</div>
													);
												})}
											</ul>
										</div>
									</Link>
								);
							})}
					</div>
				);
			})} */}
		</div>
	);
};

export default Jobs;
