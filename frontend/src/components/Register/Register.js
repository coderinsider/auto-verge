import React, { useEffect, useState } from 'react';
import  { Redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
	let navigate = useNavigate();
	let [name, setName] = useState();
	let [email, setEmail] = useState();
	let [password, setPassword] = useState();
	const saveUserRecord = async (e) => {
		e.preventDefault();
		const newUserOne = {
			name,
			email,
			password
		}
		console.log(newUserOne);

		await axios.post('http://127.0.0.01:8000/api/register', newUserOne)
		.then((resp) => {
			if(resp.data.status) {
				// Redirect to dashboard ui
				return navigate('/admin/dashboard');
			} else {
				console.log(resp.data);
			}
		});
		
	}
	return (
		<>
			<div className="custom-card card">
				<div className="card-header">
					<p>Account Register</p>
				</div>
				<div className="card-body">
					<form onSubmit={saveUserRecord}
					>
						<div className="flex-group-two form-group">
							<label>
								Username
							</label>
							<input 
							name="name"
							onChange={
								(e) => setName(e.target.value)
							}
							type="text" className="form-control" placeholder="Enter Username"/>
						</div>
						<div className="flex-group-two form-group">
							<label>
								Email
							</label>
							<input
							name="email"
							onChange={
								(e) => setEmail(e.target.value)
							}
							type="email" className="form-control" placeholder="Enter Email"/>
						</div>
						<div className="flex-group-two form-group">
							<label>
								Password
							</label>
							<input 
							name="password"
							onChange={
								(e) => setPassword(e.target.value)
							}
							type="password" className="form-control" placeholder="Enter Password"/>
						</div>
						<div className="flex-group-two form-group">
							<input type="submit" className="form-control" value="Register"/>
						</div>
					</form>
				</div>
			</div>
		</>
	)
};
export default Register;