import React, { useState } from "react";
import axios from 'axios'

const UserAdd = ({ history }) => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstname || !lastname) return

        const data = { firstname, lastname}

        try {
            const response = await axios.post('http://localhost:5000/users', data);
            console.log("Posted Data ===>", response)
            if(response.data.role ==='admin'){
                history.push("/about");
            } else {
                history.push("/");
            }
            
        } catch (error) {
            console.log('error', error);
        }
    }

    const handleCancel = () => {
        history.push("/users");
    }

    return (
        <div className="container">
            <h1>Create User</h1>
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
                <div className="form-group">
                    <label>LastName</label>
                    <select name="content"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control" >
                    /
                    <option value="admin">Admin</option>
                    <option value="admin">User</option>
                    <option value="admin">Teacher</option>
                    </select>
                </div>
                <div className="btn-group">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default UserAdd;