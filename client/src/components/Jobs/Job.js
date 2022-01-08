import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

import { BackButton } from '../../styled-components/index';

const initialJob = {};

const Job = () => {
	// console.log(useParams());
	const { jobId } = useParams();
	const [job, setJob] = useState(initialJob);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:5000/api/jobs')
			.then((res) => {
				res.data.filter((obj) => {
					if (`${obj.id}` === jobId) {
						// console.log(obj);
						setJob(obj);
					}

					return null;
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

	if (error || !Array.isArray(job.cleaners)) {
		return <p>There was an error loading your data.</p>;
	}

	return (
		<div className="component-container">
			<h1>Job Information</h1>
			<div className="go-back">
				<Link to="/jobs">
					<BackButton>&laquo; Back</BackButton>
				</Link>
			</div>
			<div className="info-container">
				<h2>{job.name}</h2>
				<div className="row-container">
					<div className="row">
						<p>Job ID: {job.id}</p>
						<p>Job Address: {job.address}</p>
						<p>Start Time: {job.startTime}</p>
						<p>Supplies: {job.supplies ? 'Needed' : 'NOT needed'}</p>
						<p>Price: ${job.price}</p>
					</div>
					<div className="row">
						<h4>Cleaners:</h4>
						<div>
							{job.cleaners.map((cleaner) => (
								<p key={cleaner.id}>{cleaner.name}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Job;
