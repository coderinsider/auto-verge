import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function ServiceItem(props) {
	const displayServiceUI = (props) => {
		const {  serviceLists } = props;
		console.log(`This step is working`);
		const serviceAccountDelete = (e) => {

            const itemIndex = e.currentTarget.getAttribute('itemIndex');
            const id = e.currentTarget.getAttribute("data-id");
            axios.post(`/api/services/delete/${id}`)
            .then((resp) => {
                console.log('Success');
                document.querySelector(`#myModal${id}`).click();
            })
            .catch((error) => {
                console.log('Failed');
            })
		}

        const BookingCompleteStatus = async (e) => {
            const mail = e.currentTarget.getAttribute('data-mail');
            const id = e.currentTarget.getAttribute("data-id");
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                }
            };
            axios.post(`/api/booking/status/complete/${id}`)
            .then((resp) => {
                console.log('Success');
                axios.post(`/api/completebooking`, {email: resp.data.mail},config)
                .then((resp) => {
                    console.log(resp);
                }).catch((error) => {
                    console.log(error);
                });
                document.querySelector(`#myModalstatus${id}`).click();
            })
            .catch((error) => {
                console.log('Failed');
            })
        }
		if(serviceLists.length > 0) {
			return (
				serviceLists.map((service, index) => {
					return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{service.created_at.substring(0,10)}</td>
                            <td>{service.customer_name}</td>
                            <td>{service.customer_email}</td>
                            <td>{service.car_number}</td>
                            <td>{service.additional_service}</td>
                            <td>
                                {service.duration} days
                            </td>
                            <td>
                                <button type="button" 
                                className="button-complete" 
                                data-bs-toggle="modal" 
                                data-bs-target={ 
                                    (service.status != 'complete') ?
                                    "#myModalstatus" + service.id
                                    : ''
                                }>
                                { (service.status == 'complete') ? 'Complete' : 'Uncomplete'}
                                
                                </button>
                                <div className="modal fade" id={"myModalstatus" + service.id} tabindex="-1" aria-labelledby={'myModal'} aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title custom-modal-title" id="exampleModalLabel">Complete Status</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="asktouser">
                                                    <p>Do you want to change this record complete booking?</p>
                                                    <span>Receive email will be sent your booking mail address.</span>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" itemIndex={service} data-id={service.id} onClick={BookingCompleteStatus}>Change</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                 
                            </td>
                            <td>{service.description}</td>
                            <td>
                                <div className="moreactions">
                                    <div className="editme">
                                        <button style={{background: '#fff'}} data-bs-toggle="modal" data-bs-target={"#myModaledit" + service.id}>
                                            <a href={"/admin/services/edit/" + service.id} style={{textDecoration: 'none'}}><i className="fas fa-edit"></i> Edit</a>
                                        </button>
                                    </div>
                                    <div className="deleteme"> 
                                        <button style={{background: '#fff'}} data-bs-toggle="modal" data-bs-target={"#myModal" + service.id}>
                                            <i className="fas fa-trash-alt"></i> Delete
                                        </button>
                                        <div className="modal fade" id={"myModal" + service.id} tabindex="-1" aria-labelledby={'myModal'} aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title custom-modal-title" id="exampleModalLabel">Delete Record</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="asktouser">
                                                            <p>Are you sure want to delete this record?</p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" itemIndex={service} data-mail={service.customer_email} data-id={service.id} onClick={serviceAccountDelete}>Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>                                        
                            </td>
                        </tr>
					)
				})
			)
		} else {
			return null;
		}
	}
	return (
		<>
			{displayServiceUI(props) }
		</>
	);
}