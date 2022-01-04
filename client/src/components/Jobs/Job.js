import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Job = () => {
	// console.log(useParams());
	const { jobId } = useParams();
	const [job, setJob] = useState({});

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/jobs')
			.then((res) => {
				res.data.filter((obj) => {
					if (`${obj.id}` === jobId) {
						// console.log(obj);
						setJob(obj);
					} else {
						return null;
					}
				});
			})
			.catch((err) => console.error(err));
	}, []);
	return (
		<div className="component-container">
			<h1>Job Information</h1>
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
						<p>Cleaners:</p>
						{job.cleaners.map((cleaner) => {
							return <p>{cleaner.name}</p>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Job;
