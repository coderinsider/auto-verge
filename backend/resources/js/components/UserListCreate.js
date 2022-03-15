
import React, {useEffect, useState} from 'react';
import UserListEach from './UserListEach';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default function UserListCreate() {
	const [gender, setGender]  = useState('male');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [success, setSuccess] = useState('');
	const [errors, setErrors] = useState(
		{
			name: '',
			email: '',
			gender: '',
			phone: '',
			password:  '',
		}
	);
	const userNew = {
		name,
		gender,
		phone,
		email,
		password
	}
	const createUserRecord  = (e) => {
		const url = "http://127.0.0.1:8000/";
		e.preventDefault();
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
        axios.post(`${url}api/userlists/create`, userNew, config)
        .then((resp) => {
        	if(!resp.data.status) {
        		setErrors({
        			name: resp.data.name,
        			email: resp.data.email,
        			gender: resp.data.gender,
        			phone:  resp.data.phone,
        			password: resp.data.password
        		});
        		setSuccess('');	
        	}
        	if(resp.data.status) {
	        	setErrors({
	    			name: '',
	    			email: '',
	    			gender: '',
	    			phone:  '',
	    			password: ''
	    		});
	    		setSuccess(resp.data.success);	
				setGender('male');
				setName('');
				setPhone('');
				setEmail('');
				setPassword('');

        	}

        	document.querySelector('#myModal').click();
        })
        .catch((error) => {

            console.log(`Error: ${error}`);
        });
    }
	return (
		<>
			<div className="markappwrapper">
				<p>{success}</p>
		        <div className="markappboxing">
		            <div className="markappheader">
		                <h5>User Create</h5>
		            </div>
		            <form id="createnow" action="#" method="post">
		                <div className="form-group custom-form-group">
		                    <label for="name">Display Gender<span style={{color:'red'}}>*</span></label>
		                    <select 
		                    onChange={(e)=> {
		                    	setGender(e.target.value);
		                    }}
		                    className="form-control" name="lang_format">
		                        <option value="male">Male</option>
		                        <option value="femal">Female</option>
		                 	</select>
		                 	<span style={{color:'red', fontSize: '.8em'}}>{errors.gender}</span>
		                </div>
		                <div className="markappbody">
		                    <div className="userformdata">
		                        <div className="form-group custom-form-group">
		                            <label for="name">Username <span style={{color:'red'}}>*</span></label>
		                            <input 
				                    onChange={(e)=> {
				                    	setName(e.target.value);
				                    }}
				                    value={name}
		                            type="text" className="form-control" name="category_name" placeholder="Username"/>
		                            <span style={{color:'red', fontSize: '.8em'}}>{errors.name}</span>
		                        </div>
		                        <div className="form-group custom-form-group">
		                            <label for="email">Phone <span style={{color: 'red'}}>*</span></label>
		                            <input 
		                            onChange={(e)=> {
				                    	setPhone(e.target.value);
				                    }}
				                    value={phone}
		                            type="text" className="form-control" name="category_des" placeholder="Phone" />
		                            <span style={{color:'red', fontSize: '.8em'}}>{errors.phone}</span>
		                        </div>
		                        <div className="form-group custom-form-group">
		                            <label for="email">Email <span style={{color: 'red'}}>*</span></label>
		                            <input 
		                            onChange={(e)=> {
				                    	setEmail(e.target.value);
				                    }}
				                    value={email}
		                            type="email" className="form-control" name="category_des" placeholder="Email" />
		                            <span style={{color:'red', fontSize: '.8em'}}>{errors.email}</span>
		                        </div>
		                        <div className="form-group custom-form-group">
		                            <label for="email">Password <span style={{color: 'red'}}>*</span></label>
		                            <input 
		                          	onChange={(e)=> {
				                    	setPassword(e.target.value);
				                    }}
				                    value={password}
		                            type="password" className="form-control" name="category_des" placeholder="Password" />
		                            <span style={{color:'red', fontSize: '.8em'}}>{errors.password}</span>
		                        </div>
		                    </div>
		                </div>
		            </form>
		            <div className="markappfooter">
		                <div className="action-button-process">
		                    <div className="form-group">
		                        <button type="button" className="isAction form-control" data-bs-toggle="modal" data-bs-target="#myModal">Create New</button>		              
		                        <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModal" aria-hidden="true">
		                            <div className="modal-dialog">
		                                <div className="modal-content">
		                                    <div className="modal-header">
		                                        <h5 className="modal-title" id="exampleModalLabel">User Record</h5>
		                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		                                    </div>
		                                    <div className="modal-body">
		                                        <div className="asktouser">
		                                            <p>Are you sure want to create record?</p>
		                                        </div>
		                                    </div>
		                                    <div className="modal-footer">
		                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		                                        <button type="button" className="btn btn-primary" onClick={createUserRecord}>Create</button>

		                                    </div>
		                                </div>
		                            </div>
		                        </div>                        
		                    </div>               
		                </div>
		              
		            </div>
		        </div>			
			</div>
		</>
	);
}

if (document.getElementById('user-manage-create')) {
    ReactDOM.render(<UserListCreate />, document.getElementById('user-manage-create'));
}