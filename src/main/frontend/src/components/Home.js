import axios from './axios';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Home() {
        const [allEmployees, setAllEmployees] = useState([]);
        const [searchValue, setSearchValue] = useState('');


        useEffect(() => {
                const getAllEmployees = async () => {
                        try {
                                const response = await axios.get('/all');
                                setAllEmployees(response.data);
                        } catch (err) {
                                console.log(`Error: ${err.message}`);
                        }
                }
                getAllEmployees();
        }, [allEmployees]) // only run this when the component didMount

        const deleteEmployee = async (id) => {
                try {
                        await axios.delete(`/delete/${id}`);
                        console.log("Deleted an employee successfully.");
                } catch (err) {
                        console.log(`Error: ${err.message}`);
                }
                
        };

        const filterEmployees = allEmployees.filter((data) => {
                if (searchValue === '') {
                        return data;
                }
                else {
                        return data.name.toLowerCase().includes(searchValue);
                }
        }, [searchValue]);

        return (
                <div class="bg-yellow-50 min-h-screen">
                        <Header />

                        <div class="flex m-10">
                                <Link to='/add'>
                                        <div class="flex space-x-1 bg-amber-200 w-40 p-3 rounded-lg border border-amber-400">
                                                <AddBoxIcon />
                                                <p class="text-l">Add Employee</p>
                                        </div>
                                </Link>
                                <div class="mx-auto">
                                        <input type="text" placeholder="Search ..." class="w-64 p-3 rounded-lg border border-amber-400 focus:outline-none focus:border-amber-400 focus:ring-amber-400 focus:ring-1" onChange={(e) => {
                                                setSearchValue(e.target.value.toLowerCase());
                                        }} />
                                </div>
                        </div>

                        <div class="w-4/5 flex flex-wrap gap-10  mx-auto place-items-center">

                                {/* {allEmployees.map(employee => ( */}
                                {filterEmployees.map((employee) => (
                                        <div class="w-80 h-102 py-10 px-8 bg-white rounded-xl grid grid-row-5 gap-4 border border-solid border-amber-400" key={employee.id}>
                                                <div class="grid grid-cols-2 gap-4 h-40">
                                                        <img src={employee.imageUrl} alt="image" class="rounded-xl h-36 mx-auto" />
                                                        <div class="grid grid-flow-row py-3">
                                                                <p class="text-l font-bold align-middle">{employee.employeeCode}</p>
                                                                <p class="text-l font-bold align-middle">{employee.name}</p>
                                                                <p>{employee.jobTitle}</p>
                                                        </div>
                                                </div>

                                                <p>{employee.email}</p>
                                                <p>{employee.phone}</p>
                                                <div class="flex flex-row-reverse gap-2">
                                                        <div class="bg-amber-200 border border-amber-400 rounded-lg p-2" onClick={() => deleteEmployee(employee.id)}>
                                                                <DeleteIcon />
                                                        </div>
                                                        <Link to={"/edit/" + employee.id} >
                                                                <div class="bg-amber-200 border border-amber-400 rounded-lg p-2">
                                                                        <EditIcon />
                                                                </div>
                                                        </Link>
                                                </div>
                                        </div >
                                ))}
                        </div>

                </div>
        )
}

export default Home;
