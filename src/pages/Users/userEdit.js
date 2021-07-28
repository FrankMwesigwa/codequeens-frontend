import React, { useState, useEffect } from "react";
import axios from 'axios'

const UserEdit = ({ match, history }) => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')

    const userId = match.params.id

    const getUser = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/${userId}`);
            setFirstName(response.data.firstname);
            setLastName(response.data.lastname)
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        getUser();
    }, [userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstname || !lastname) return

        const data = { firstname, lastname }

        try {
            const response = await axios.patch(`http://localhost:5000/users/${userId}`, data);
            console.log("Updated Data ===>", response)
            history.push("/users");
        } catch (error) {
            console.log('error', error);
        }
    }

    const handleCancel = () => {
        history.push("/users");
    }

    return (
        <div className="container">
            <h1>Edit User</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input name="title" type="text"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label>LastName</label>
                    <textarea name="content" rows="5"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control" />
                </div>
                <div className="btn-group">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default UserEdit;