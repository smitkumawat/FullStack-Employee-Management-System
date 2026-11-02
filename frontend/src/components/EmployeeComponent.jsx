
import React, { useEffect, useState } from 'react';
import {
    createEmployee,
    updateEmployee,
    getEmployee
} from '../services/EmployeeService';

import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const { id } = useParams();
    const navigator = useNavigate();

    // Get employee details when updating
    useEffect(() => {

        if (id) {
            getEmployee(id)
                .then((response) => {
                    setFirstName(response.data.firstName || '');
                    setLastName(response.data.lastName || '');
                    setEmail(response.data.email || '');
                })
                .catch((error) => {
                    console.error("Error fetching employee:", error.response?.data || error.message);
                });
        }

    }, [id]);

    // Form validation
    function validateForm() {

        let valid = true;

        const errorsCopy = {
            firstName: '',
            lastName: '',
            email: ''
        };

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    // Save or update employee
    function saveOrUpdateEmployee(e) {

        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const employee = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim()
        };

        if (id) {

            updateEmployee(id, employee)
                .then((response) => {
                    console.log("Employee updated:", response.data);
                    navigator('/employees');
                })
                .catch((error) => {
                    console.error(
                        "Update error:",
                        error.response?.data || error.message
                    );
                });

        } else {

            createEmployee(employee)
                .then((response) => {
                    console.log("Employee created:", response.data);
                    navigator('/employees');
                })
                .catch((error) => {
                    console.error(
                        "Create error:",
                        error.response?.data || error.message
                    );
                });
        }
    }

    // Page title
    function pageTitle() {
        return id
            ? <h2 className="text-center">Update Employee</h2>
            : <h2 className="text-center">Add Employee</h2>;
    }

    return (
        <div className="container">
            <br />

            <div className="row">
                <div className="card col-md-6 offset-md-3">

                    {pageTitle()}

                    <div className="card-body">

                        <form onSubmit={saveOrUpdateEmployee}>

                            {/* First Name */}
                            <div className="form-group mb-2">

                                <label className="form-label">
                                    First Name:
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter Employee First Name"
                                    name="firstName"
                                    value={firstName}
                                    className={`form-control ${
                                        errors.firstName ? 'is-invalid' : ''
                                    }`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                                {errors.firstName && (
                                    <div className="invalid-feedback">
                                        {errors.firstName}
                                    </div>
                                )}

                            </div>

                            {/* Last Name */}
                            <div className="form-group mb-2">

                                <label className="form-label">
                                    Last Name:
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter Employee Last Name"
                                    name="lastName"
                                    value={lastName}
                                    className={`form-control ${
                                        errors.lastName ? 'is-invalid' : ''
                                    }`}
                                    onChange={(e) => setLastName(e.target.value)}
                                />

                                {errors.lastName && (
                                    <div className="invalid-feedback">
                                        {errors.lastName}
                                    </div>
                                )}

                            </div>

                            {/* Email */}
                            <div className="form-group mb-2">

                                <label className="form-label">
                                    Email:
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter Employee Email"
                                    name="email"
                                    value={email}
                                    className={`form-control ${
                                        errors.email ? 'is-invalid' : ''
                                    }`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}

                            </div>

                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                Submit
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
