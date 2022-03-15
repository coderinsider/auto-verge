import React, { useEffect, useState } from 'react';

const Register = () => {

	let [username, setUsername] = useState();
	let [email, setEmail] = useState();
	let [password, setPassword] = useState();
	const saveUserRecord = (e) => {
		e.preventDefault();
		const newUserOne = {
			name: username,
			email: email,
			password: password
		}
		console.log(newUserOne);

	}
	useEffect(() => {
		fetch('http://127.0.0.1:8000/user-register', {
			method: "GET"
		}, [])
		.then((res) => res.json())
		.then((data) => console.log(data));
	})
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
							onChange={
								e => setUsername(e.target.value)
							}
							type="text" className="form-control" placeholder="Enter Username"/>
						</div>
						<div className="flex-group-two form-group">
							<label>
								Email
							</label>
							<input 
							onChange={
								e => setEmail(e.target.value)
							}
							type="email" className="form-control" placeholder="Enter Email"/>
						</div>
						<div className="flex-group-two form-group">
							<label>
								Password
							</label>
							<input 
							onChange={
								e => setPassword(e.target.value)
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