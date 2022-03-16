import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default function ServiceListEdit({dataId}) {
	const [success, setSuccess] = useState("");
	const [failed, setFailed] = useState("");
	const [serviceName, setServiceName] = useState("");

	const [currentServiceData, setCurrentServiceData] = useState("");
	useEffect(() => {
		gettingCurrentData();
	}, []);
	const gettingCurrentData = () => {
		axios.get(`/api/services-lists/edit/current/${dataId}`)
		.then((resp) => {
			setCurrentServiceData(resp.data.data);
			setServiceName(resp.data.data.service_name);
			console.log(resp.data.data);
		})
		.catch((error) => {
			console.log(error);
		})
	}
	console.log(currentServiceData);
	
	const newServiceRecord = {
		service_name: serviceName,
	}
	console.log(newServiceRecord);

	const UpdateServiceList = () => {
		const config = {
			headers: {
				'Content-Type' : 'application/json'
			}
		};
		axios.post(`/api/services-lists/edit/${dataId}`, newServiceRecord, config)
		.then((resp) => {
			if(resp.data.status) {
				setSuccess(resp.data.success);
				setServiceName("");
			} else {
				setSuccess("");
			}

			document.querySelector('#myModal').click();
		})
		.catch((error) => {
			console.log(error);
		});
	}
	return (
		<>
			<div className="markappwrapper">
				<p>{success}</p>
		        <div className="markappboxing">
		            <div className="markappheader">
		                <h5>Service Edit</h5>
		            </div>
		            <form id="createnow" action="#" method="post">
		                <div className="markappbody">
		                    <div className="userformdata">
		                        <div className="service-group form-group custom-form-group">
		                            <label className="service-group-label" for="name">Service Name <span style={{color:'red'}}>*</span></label>
		                            <input 
		                            value={serviceName}
		                            onChange={
		                            	(e) => {
		                            		setServiceName(e.target.value)
		                            	}
		                            }
		                            type="text" className="form-control" name="category_name" placeholder="Service Name"/>
		                            
		                        </div>			                    
		                    </div>
		                </div>
		            </form>
		            <div className="markappfooter">
		                <div className="action-button-process">
		                    <div className="form-group">
		                        <button type="button" className="isAction form-control" data-bs-toggle="modal" data-bs-target={"#myModal"}>Update</button>		              
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
		                                        <button type="button" className="btn btn-primary" onClick={UpdateServiceList}>Update</button>

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

if (document.getElementById('car-services-lists-edit')) {
	var data = document.getElementById('car-services-lists-edit').getAttribute('dataId');
    ReactDOM.render(<ServiceListEdit dataId={data}/>, document.getElementById('car-services-lists-edit'));
}