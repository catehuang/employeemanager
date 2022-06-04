import axios from './axios';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Home() {
        const [employees, setEmployees] = useState([]);
        const [name, setName] = useState('');
        const [employeeCode, setEmployeeCode] = useState('');
        const [jobTitle, setJobTitle] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [imageUrl, setImageUrl] = useState('');
        const navigate = useNavigate();

        useEffect(() => {
                const getAllEmployees = async () => {
                        try {
                                const response = await axios.get('/all');
                                setEmployees(response.data);
                        } catch (err) {
                                console.log(`Error: ${err.message}`);
                        }
                }
                getAllEmployees();
        }, [employees]) // only run this when the component didMount

        const deleteEmployee = async (id) => {
                try {
                        await axios.delete(`/delete/${id}`);
                        console.log("Deleted an employee successfully.");
                } catch (err) {
                        console.log(`Error: ${err.message}`);
                }
        };

        const findEmployeeById = (id) => {
                axios.get('http://localhost:8080/employee/find')
                        .then(res => {
                                console.log(res);
                        });
        };


        const updateEmployee = () => {
                axios.update('http://localhost:8080/employee/update')
                        .then(res => {
                                console.log(res);
                        });
        };

        return (
                <div class="bg-yellow-50 h-full">
                        <Header />

                        <div class="flex m-10">
                                <Link to='/add'>
                                        <div class="flex space-x-1 bg-amber-200 w-40 p-3 rounded-lg border border-gray-400">
                                                <AddBoxIcon />
                                                <p class="text-l">Add Employee</p>
                                        </div>
                                </Link>
                                <div class="mx-auto ">
                                        <input type="text" placeholder="Search ..." class="rounded-l-lg p-2.5 border-t mr-0 border-b border-l text-gray-800 border-gray-400" />
                                        <span class="px-3 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-3 border-gray-400 border-t border-b border-r"><SearchIcon /></span>
                                </div>
                        </div>

                        <div class="w-4/5 flex flex-wrap gap-10  mx-auto place-items-center">

                                {employees.map(employee => (
                                        <div class="w-80 h-102 py-10 px-8 bg-white rounded-xl grid grid-row-5 gap-4 border border-solid border-gray-200" key={employee.id}>
                                                <div class="grid grid-cols-2 gap-4 h-40">
                                                        <img src={employee.imageUrl} alt="image" class="rounded-xl h-36 mx-auto" />
                                                        <div class="grid grid-flow-row">
                                                                <div class="text-l font-bold align-middle">
                                                                        <p>{employee.name}</p>
                                                                </div>
                                                                <p>{employee.jobTitle}</p>
                                                        </div>
                                                </div>
                                                <p>{employee.employeeCode}</p>
                                                <p>{employee.email}</p>
                                                <p>{employee.phone}</p>
                                                <div class="flex flex-row-reverse gap-2">
                                                        <div class="bg-amber-200 border border-gray-400 rounded-lg p-2" onClick={() => deleteEmployee(employee.id)}>
                                                                <DeleteIcon />
                                                        </div>
                                                        <Link to={"/edit/" + employee.id} >
                                                        <div class="bg-amber-200 border border-gray-400 rounded-lg p-2">
                                                                <EditIcon />
                                                        </div>
                                                        </Link>
                                                </div>
                                        </div >
                                        // <Employee key={employee.id}
                                        //         employeeId = {employee.id}
                                        //         name = {employee.name}
                                        //         email = {employee.email}
                                        //         phone = {employee.phone}
                                        //         jobTitle = {employee.jobTitle}
                                        //         imageUrl = {employee.emailUrl}
                                        //         employeeCode = {employee.employeeCode}
                                        ///>
                                ))}
                        </div>

                </div>
        )
}

export default Home;
