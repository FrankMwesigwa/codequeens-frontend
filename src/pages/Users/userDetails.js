import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
    const [user, setUser] = useState({});

    console.log("Properties ====>", props)

    const userId = props.match.params.id

    const getUser = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/users/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        getUser();
    }, [userId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:9000/users/${userId}`);
            props.history.push("/users");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h2>{user.firstname}</h2>
            <p>LastName: {user.lastname}</p>
            <p>ID: {user._id}</p>
            <p>Date: {user.registerDate}</p>
            <div className="btn-group">
                <Link to={`/users/edit/${user._id}/`} className="btn btn-primary">Edit</Link>
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                <Link to="/users" className="btn btn-secondary">Close</Link>
            </div>
            <hr />
        </div>
    );
};

export default UserDetails;