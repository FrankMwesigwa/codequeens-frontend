import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../helpers/api';

const UsersList = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
        const response = await API.get("/users");
        console.log("Users Backend ===>", response)
        setUsers(response.data);
      } catch(error) {
        console.log('error', error);
      }
  }

  useEffect(() => {       
    getUsers();
  }, []);

  return (
    <div className="container">
      <h2>
        Users
        <Link to="/adduser" className="btn btn-primary float-right">Create New User</Link> 
      </h2>
      <hr/>
      {users.map((user) => {
        return(
          <div key={user._id}>
            <h4><Link to={`/users/${user._id}`}>{user.firstname}</Link></h4>
            <p>LastName: {user.lastname}</p>
            <p>ID: {user._id}</p>
            <p>Date: {user.registerDate}</p>
            <hr/>
          </div>
        )     
      })}
      
    </div>
  )
}

export default UsersList;