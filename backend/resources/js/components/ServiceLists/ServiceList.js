import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ServiceListItem from './ServiceListItem';
import axios from 'axios';
export default function ServiceList() {
    const [serviceLists, setServiceLists ] = useState("");
	useEffect(() => {
		gettingServiceData();
	}, []);
	const gettingServiceData = () => {
		axios.get(`/api/services-lists/lists`)
		.then((resp) => {
            setServiceLists(resp.data.data);
			
		})
		.catch((error) => {
			console.log(error);
		});
	}
    console.log(serviceLists);
    return (
        <>
            <div className="backend-right-main-panel">
                <div className="backend-head-box">
                    <div className="nav-name-text">
                        <h3>Services Lists</h3>
                    </div>
                    <div className="nav-post-add">
                        <a href="/admin/our-services/create">Add New</a>
                    </div>
                </div>
                <div className="backend-body-box">
                    <div className="table-box-panel">
                        <table className="table">
                            <tr>
                                <th>No</th>
                                <th>Service Name</th>
                                <th>Actions</th>
                            </tr>
                            <ServiceListItem serviceLists={serviceLists}/>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

if (document.getElementById('car-services-lists')) {
    ReactDOM.render(<ServiceList />, document.getElementById('car-services-lists'));
}