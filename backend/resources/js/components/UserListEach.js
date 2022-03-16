import React , {useState, useCallback} from 'react';
import axios from 'axios';
export default function UserListEach(props) {
	const displayUserUI = (props) => {
        const [success, setSuccess] = useState('');
		const {  userLists } = props;
        const [updateLists, setUpdateLists] = useState('');
        const userAccountDelete = (e) => {
            const itemIndex = e.currentTarget.getAttribute('itemIndex');
            const id = e.currentTarget.getAttribute("data-id");
            axios.post(`/api/userlists/delete/${id}`, null)
            .then((resp) => {
                console.log("SUCCESS");
                document.querySelector(`#myModal${id}`).click();
                
                userLists.splice(itemIndex, 1);
                console.log(userLists)
            })
            .catch((error) => {
                console.log(error);
            });
        } 
		if(userLists.length > 0) {
			return (
				userLists.map((user,index) => {
					console.log(user);
					return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.gender.toUpperCase()}</td>
                            <td>
                                <div className="imgpreview" style={{width: '50px',height: '50px'}}>
                                    <img src="/uploads/usercover/default.jpeg" style={{border: '2px solid #6CB4FF',borderRadius: '50%',width: '100%',height: '100%'}} />
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>
                                <p className="isactivestatus" style={{padding: '3px 10px'}}>
                                    Active
                                </p>
                            </td>
                            <td>
                                <div className="moreactions">
                                    <div className="editme">
                                        <button style={{background: '#fff'}} data-bs-toggle="modal" data-bs-target={"#myModaledit" + user.id}>
                                            <a href={"/admin/user-list/edit/" + user.id} style={{textDecoration: 'none'}}><i className="fas fa-edit"></i> Edit</a>
                                        </button>
                                    </div>
                                    <div className="deleteme"> 
                                        <button style={{background: '#fff'}} data-bs-toggle="modal" data-bs-target={"#myModal" + user.id}>
                                            <i className="fas fa-trash-alt"></i> Delete
                                        </button>
                                        <div className="modal fade" id={"myModal" + user.id} tabindex="-1" aria-labelledby={'myModal'} aria-hidden="true">
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
                                                        <button type="button" className="btn btn-primary" itemIndex={user} data-id={user.id} onClick={userAccountDelete}>Delete</button>
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
	return(
		<>
			{ displayUserUI(props)}
		</>
	);
}