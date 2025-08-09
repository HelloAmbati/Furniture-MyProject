
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const BASE_URL = "http://localhost:5050/users";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [updateUserId, setUserId] = useState(null);
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

  const fetchUsers = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setUsers(res.data);
      setFilteredUsers(res.data);
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  const onUserFormSubmit = async (formDataObj) => {
    try {
      if (updateUserId) {
        await axios.put(`${BASE_URL}/${updateUserId}`, formDataObj);
        setUserId(null);
      } else {
        await axios.post(BASE_URL, formDataObj);
      }
      reset();
      fetchUsers();
    } catch (error) {
      console.error("Error storing data");
    }
  };

  const handleEdit = (user) => {
    setUserId(user.id);
    setValue('userName', user.userName);
    setValue('salary', user.salary);
    setValue('email', user.email);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting Users", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Form Section */}
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm">
            {/* <div className="card-header text-white" style={{ backgroundColor: '#2a9d8f' }}>
              <h5 className="mb-0">{updateUserId ? "Update User" : "User Registration"}</h5>
            </div> */}

            <div className="card-header text-white" style={{ backgroundColor: '#87CEEB' }}>
              <h5 className="mb-0">{updateUserId ? "Update User" : "User Registration"}</h5>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit(onUserFormSubmit)}>
                {/* User Name */}
                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('userName', {
                      required: true,
                      pattern: /^[a-zA-Z\s]{3,30}$/i
                    })}
                  />
                  {errors.userName?.type === 'required' && <small className="text-danger">* Required</small>}
                  {errors.userName?.type === 'pattern' && <small className="text-danger">* 3–30 letters only</small>}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('email', {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    })}
                  />
                  {errors.email?.type === 'required' && <small className="text-danger">* Required</small>}
                  {errors.email?.type === 'pattern' && <small className="text-danger">* Invalid format</small>}
                </div>

                {/* Salary */}
                <div className="mb-3">
                  <label className="form-label">Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register('salary', {
                      required: true,
                      min: 0
                    })}
                  />
                  {errors.salary?.type === 'required' && <small className="text-danger">* Required</small>}
                  {errors.salary?.type === 'min' && <small className="text-danger">* Must be positive</small>}
                </div>

                {/* <button type="submit" className="btn btn-success w-100" style={{ backgroundColor: '#2a9d8f' }}>
                  {updateUserId ? "Update User" : "Add User"}
                </button> */}

                <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#87CEEB', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                  {updateUserId ? "Update User" : "Add User"}
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="col-md-7">
          {/* Search Bar with Icon */}
          <div className="input-group mb-3">
            <span className="input-group-text bg-white border-end-0">
              <i className="fas fa-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search by username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* <div className="table-responsive shadow-sm rounded"> */}
          <div className="table-responsive shadow-lg rounded" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}>
            <table className="table table-bordered table-hover rounded">
              {/* <thead className="table-dark"> */}
              <thead className="table-primary bg-info text-white">

                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Salary (₹)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.salary}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-info" onClick={() => handleEdit(user)}>Edit</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">No Users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
