import { Box } from "@mui/material";
import UserForms from "./UserForms";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const [isEdit, setEdit] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            })
    }

    const addUser = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3001/api/createusers', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            })
    }

    const updateUsers = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3001/api/updateusers', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            })
    }

    const deleteUser = (data) => {  // Changed name from deleteUsers to deleteUser
        const payload = {
            id: data.id  // Fixed: define payload
        };
        Axios.post('http://localhost:3001/api/deleteusers', payload)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            })
    }

    return(
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
            }}
        >
            <UserForms 
                addUser={addUser}
                updateUsers={updateUsers}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable 
                rows={users} 
                selectedUser={data => {
                    setSelectedUser(data);
                    setEdit(true);
                }}
                deleteUser={data => {  // Changed prop name from deleteUsers to deleteUser
                    if(window.confirm("Are you sure?")) {
                        deleteUser(data);
                    }
                }}
            />
        </Box>
    );
}

export default Users;