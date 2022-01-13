import React from 'react';
import { Link } from 'react-router-dom';
import { BackButton } from '../../styled-components';

const NewJob = () => {
	return (
		<div className="component-container">
			<h1>Create New Job</h1>
			<div className="go-back">
				<Link to="/jobs">
					<BackButton>&laquo; Back</BackButton>
				</Link>
			</div>
			<div className="info-container"></div>
		</div>
	);
};

export default NewJob;
