import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ServiceItem from './ServiceItem';
import axios from 'axios';
export default function Services() {
    const [serviceLists, setServiceLists ] = useState("");
	useEffect(() => {
		gettingServiceData();
	}, []);
	const gettingServiceData = () => {
		axios.get(`/api/services/lists`)
		.then((resp) => {
            setServiceLists(resp.data.data);
			console.log(resp.data.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}
    return (
        <>
            <div className="backend-right-main-panel">
                <div className="backend-head-box">
                    <div className="nav-name-text">
                        <h3>Services Lists</h3>
                    </div>
                    <div className="nav-post-add">
                        <a href="/admin/services/create">Add New</a>
                    </div>
                </div>
                <div className="backend-body-box">
                    <div className="table-box-panel">
                        <table className="table">
                            <tr>
                                <th>No</th>
                                <th>Date</th>
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Car Number</th>
                                <th>Additional Services</th>
                                <th>Duration</th>
                                <th>Desicription</th>
                                <th>Actions</th>
                            </tr>
                            <ServiceItem serviceLists={serviceLists}/>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

if (document.getElementById('car-services')) {
    ReactDOM.render(<Services />, document.getElementById('car-services'));
}