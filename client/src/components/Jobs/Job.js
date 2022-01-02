import React from 'react';
import { useParams } from 'react-router-dom';

const Job = () => {
	const { jobId } = useParams();
	return (
		<div className="component-container">
			<h1>Job with an id of #{jobId}</h1>
		</div>
	);
};

export default Job;
