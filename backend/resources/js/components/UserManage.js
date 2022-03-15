import React, {useEffect, useState} from 'react';
import UserListEach from './UserListEach';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default function UserManage() {
    const [userLists, setUserLists] = useState('');
    const url = "http://127.0.0.1:8000/";
    useEffect(() => {
        getAllNotes();
        console.log("WWW");
        console.log(userLists);
    }, []);
    const getAllNotes  = () => {
        axios.get(`${url}api/userlists`)
        .then((resp) => {
            const allNotes = resp.data.data;
            console.log(resp.data.data);
            setUserLists(resp.data.data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
    }
    return (
        <>
            
            <div className="backend-right-main-panel">
                <div className="backend-head-box">
                    <div className="nav-name-text">
                        <h3>User Lists</h3>
                    </div>
                    <div className="nav-post-add">
                        <a href="/">Add New</a>
                    </div>
                </div>
                <div className="backend-body-box">
                    <div className="table-box-panel">
                        <table className="table">
                            <tr>
                                <th>No</th>
                                <th>Member Name</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Profile Image</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            <UserListEach userLists={userLists} />
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

if (document.getElementById('user-manage')) {
    ReactDOM.render(<UserManage />, document.getElementById('user-manage'));
}