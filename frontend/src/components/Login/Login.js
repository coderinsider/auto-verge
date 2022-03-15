import React from 'react';

const Login = () => {
	return (
		<>
			<div className="custom-card card">
				<div className="card-header">
					<p>Account Login</p>
				</div>
				<div className="card-body">
					<form>
						<div className="flex-group-two form-group">
							<label>
								Username
							</label>
							<input type="text" className="form-control" placeholder="Enter Username"/>
						</div>
						<div className="flex-group-two form-group">
							<label>
								Password
							</label>
							<input type="password" className="form-control" placeholder="Enter Password"/>
						</div>
						<div className="flex-group-two form-group">
							<input type="submit" className="form-control" value="Login"/>
						</div>
					</form>
				</div>
			</div>
		</>
	)
};
export default Login;