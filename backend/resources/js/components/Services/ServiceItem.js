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
		if(serviceLists.length > 0) {
			return (
				serviceLists.map((service, index) => {
					return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{service.created_at}</td>
                            <td>{service.customer_name}</td>
                            <td>{service.customer_email}</td>
                            <td>{service.car_number}</td>
                            <td>{service.additional_service}</td>
                            <td>
                                {service.duration} days
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
                                                        <button type="button" className="btn btn-primary" itemIndex={service} data-id={service.id} onClick={serviceAccountDelete}>Delete</button>
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