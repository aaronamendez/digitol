// import logo from './logo.svg';
import React from 'react';
// import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Dashboard from './components/Dashboard/Dashboard';
import Clients from './components/Clients/Clients';
import Client from './components/Clients/Client';
import Jobs from './components/Jobs/Jobs';
import Job from './components/Jobs/Job';
import Users from './components/Users/Users';
import User from './components/Users/User';
import ErrorNotFound from './components/Errors/ErrorNotFound';

// Styles
import './App.css';

function App() {
	return (
		<div className="App">
			{/* Fix Auth Link so that it brings in Login/Signup OR Logout */}
			<nav>
				<Link to="/">Dashboard</Link>
				<Link to="/clients">Clients</Link>
				<Link to="/jobs">Jobs</Link>
				<Link to="/users">Users</Link>
				{/* <Link to="/">Auth</Link> */}
			</nav>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/clients" element={<Clients />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/users" element={<Users />} />
				{/* <Route path="/auth" element={<Home />}/> */}

				{/* Specified Routing */}
				<Route path="/clients/:clientId" element={<Client />} />
				<Route path="/jobs/:jobId" element={<Job />} />
				<Route path="/users/:userId" element={<User />} />

				{/* Error Route */}
				<Route path="*" element={<ErrorNotFound />} />
				<Route path="/clients/*" element={<ErrorNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
