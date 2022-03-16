import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


export default function ServiceCreate() {
	const [success, setSuccess] = useState("");
	const [failed, setFailed] = useState("");
	const [customerName, setCustomerName] = useState("");
	const [customerEmail, setCustomerEmail] = useState("");
	const [carNumber, setCarNumber] = useState("");
	const [additionalServices, setAdditionalServices] = useState("");
	const [duration, setDuration] = useState("");
	const [description, setDescription] = useState("");


	const [polish, setPolish] = useState(false);
	const [repair, setRepair] = useState(false);
	const [parking, setParking] = useState(false);
	const [wash, setWash] = useState(false);
	const createRecord = {
		car_parking: parking ? "Car Parking" : '',
		car_washing: wash ? "Car Washing" : '',
		car_polishing: polish ? "Car Polishing" : '',
		car_repair: repair ? "Car Repair" : ''
	}
	const additionalManage = createRecord.car_parking + "," + createRecord.car_washing + "," + createRecord.car_polishing + "," +  createRecord.car_repair;
	const newServiceRecord = {
		customer_name: customerName,
		customer_email: customerEmail,
		car_number: carNumber,
		additional_service: additionalManage,
		duration,
		description
	}
	console.log(newServiceRecord);

	const createManageRecord = () => {
		const config = {
			headers: {
				'Content-Type' : 'application/json'
			}
		};
		axios.post('/api/services/create', newServiceRecord, config)
		.then((resp) => {
			if(resp.data.status) {
				axios.post(`/api/emailbooking`, {email: customerEmail}, config)
				.then((resp) => {

				})
				.catch((error) => {

				});
				setSuccess(resp.data.success);
				setCustomerName("");
				setCustomerEmail("");
				setCarNumber("");
				setAdditionalServices("");
				setDuration("");
				setDescription("");
				
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
		                <h5>Service Create</h5>
		            </div>
		            <form id="createnow" action="#" method="post">
		                <div className="markappbody">
		                    <div className="userformdata">
		                        <div className="service-group form-group custom-form-group">
		                            <label className="service-group-label" for="name">Customer Name <span style={{color:'red'}}>*</span></label>
		                            <input 
		                            required
		                            onChange={
		                            	(e) => {
		                            		setCustomerName(e.target.value)
		                            	}
		                            }
		                            type="text" className="form-control" name="category_name" placeholder="Cutomer Name"/>
		                            
		                        </div>
		                        <div className="service-group form-group custom-form-group">
		                            <label className="service-group-label" for="name">Customer Email <span style={{color:'red'}}>*</span></label>
		                            <input 
		                            required
		                            onChange={
		                            	(e) => {
		                            		setCustomerEmail(e.target.value)
		                            	}
		                            }
		                            type="text" className="form-control" name="category_name" placeholder="Customer Email"/>
		                            
		                        </div>

		                       	<div className="service-group form-group custom-form-group">
		                            <label className="service-group-label" for="name">Car Number <span style={{color:'red'}}>*</span></label>
		                            <input 
		                            required
		                            onChange={
		                            	(e) => {
		                            		setCarNumber(e.target.value)
		                            	}
		                            }
		                            type="text" className="form-control" name="category_name" placeholder="Car Number"/>
		                            
		                        </div>
		                        <div className="additional-wrapper">
		                        	<p>Additional Services</p>
			                        <div className="service-group form-group custom-form-group">
			                            <label className="service-group-label" for="name">Polishing</label>
										<label className="switch custom-switch-right">
											<input type="checkbox" 
											onClick={
												(e) => {
													setPolish(!polish);
												}
											}/>
											<span className="slider"></span>
										</label>		                            
			                        </div>
			                        <div className="service-group form-group custom-form-group">
			                            <label className="service-group-label" for="name">Repair <span style={{color:'red'}}>*</span></label>
										<label className="switch custom-switch-right">
											<input type="checkbox" 
											onClick={
												(e) => {
													setRepair(!repair);
												}
											}/>
											<span className="slider"></span>
										</label>	
			                        </div>
			                        <div className="service-group form-group custom-form-group">
			                            <label className="service-group-label" for="email">Parking</label>
										<label className="switch custom-switch-right">
											<input type="checkbox" 
											onClick={
												(e) => {
													setParking(!parking);
												}
											}/>
											<span className="slider"></span>
										</label>
			                        </div>
			                        <div className="service-group form-group custom-form-group">
			                            <label className="service-group-label" for="email">Washing</label>
										<label className="switch custom-switch-right">
											<input type="checkbox" 
											onClick={
												(e) => {
													setWash(!wash);
												}
											}/>
											<span className="slider"></span>
										</label>
			                        </div>
			                    </div>
			                        <div className="service-group form-group custom-form-group">
			                            <label className="service-group-label" for="name">Duration</label>
			                            <input 
			                            onChange={
			                            	(e) => {
			                            		setDuration(e.target.value)
			                            	}
			                            }
			                            type="number" className="form-control" min="1" max="30" name="category_name" placeholder="Duration" />
			                            
			                        </div>
			                        <div className="service-group form-group custom-form-group">
			                            <label className="service-group-label" for="name">Description</label>
			                            <textarea 
			                            onChange={
			                            	(e) => {
			                            		setDescription(e.target.value)
			                            	}
			                            }
			                            type="text" className="form-control" name="category_name" placeholder="Description"></textarea>
			                            
			                        </div>
			                    
		                    </div>
		                </div>
		            </form>
		            <div className="markappfooter">
		                <div className="action-button-process">
		                    <div className="form-group">
		                        <button type="button" className="isAction form-control" data-bs-toggle="modal" data-bs-target={"#myModal"}>Create New</button>		              
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
		                                        <button type="button" className="btn btn-primary" onClick={createManageRecord}>Create</button>

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
if (document.getElementById('car-services-create')) {
    ReactDOM.render(<ServiceCreate />, document.getElementById('car-services-create'));
}