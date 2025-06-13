import UserForm from '../../components/UserForm/UserForm';
import UserList from '../../components/UserList/UserList';
import './ManageUsers.css'
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {fetchUsers} from "../../service/UserService.js";

const ManageUsers= () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function loadUsers() {
            try{
                setLoading(true);
                const response = await fetchUsers();
                setUsers(response.data);

            }catch(err){
                console.log(err);
                toast.error("Unable to fetch users.");
            }finally{
                setLoading(false);
            }
        }
        loadUsers();
    }, []);

    return (
        <div className="user-container text-light">
            <div className="left-column">
                <UserForm setUsers={setUsers} />
            </div>
            <div className="right-column">
                <UserList users={users} setUsers={setUsers}/>
            </div>
        </div>
    )

}
export default ManageUsers;
