import axios from "axios";

const API_BASE-URL ='https://fullstack-employee-management-system-psi0.onrender.com';


export const listEmployees = () => axios.get(REST_API_BASE_URL);


export const createEmployee =(employee) => axios.post(REST_API_BASE_URL, employee);


export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);


export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId ,employee);


export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);
