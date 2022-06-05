import React, { useState } from 'react';
import Header from './Header';
import axios from './axios';
import { useNavigate } from 'react-router-dom';

function NewEmployee() {
        const [name, setName] = useState('');
        const [employeeCode, setEmployeeCode] = useState('');
        const [jobTitle, setJobTitle] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [imageUrl, setImageUrl] = useState('');

        const navigate = useNavigate();

        const addEmployee = async (e) => {
                e.preventDefault();

                await axios.post('/add', {
                        name: name,
                        employeeCode: employeeCode,
                        jobTitle: jobTitle,
                        email: email,
                        phone: phone,
                        imageUrl: imageUrl
                }).then(res => {
                        console.log(res);
                        navigate('/');
                });
        };

        return (
                <div class="bg-yellow-50 min-h-screen">
                        <Header />
                        <div class="h-120 mx-auto">
                                <h2 class="text-center text-xl font-bold my-10">Add a New Employee</h2>
                                <form class="w-96  border border-amber-400 rounded-lg p-5 mx-auto" onSubmit={addEmployee} >
                                        <div class="grid grid-cols-2">
                                                <div>
                                                        <img src={imageUrl} alt="" class="border border-gray-300 rounded-lg mx-auto h-56" />
                                                </div>

                                                <div>
                                                        <div class="pl-5">
                                                                <label htmlFor="newEmployeeEmployeeCode" class="block mb-1">Employee Code</label>
                                                                <input id="newEmployeeEmployeeCode" type="text" class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" required onChange={
                                                                        e => setEmployeeCode(e.target.value)
                                                                } />
                                                        </div>
                                                        <div class="pl-5">
                                                                <label htmlFor="newEmployeeName" class="block mb-1">Name</label>
                                                                <input id="newEmployeeName" type="text" class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" required onChange={
                                                                        e => setName(e.target.value)
                                                                } />
                                                        </div>
                                                        <div class="pl-5">
                                                                <label htmlFor="newEmployeeJobTitle" class="block mb-1">Job Title</label>
                                                                <input id="newEmployeeJobTitle" type="text" class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" onChange={
                                                                        e => setJobTitle(e.target.value)
                                                                } />
                                                        </div>
                                                </div>
                                        </div>

                                        <div>
                                                <label htmlFor="newEmployeeImageURL" class="block mb-1">Image URL</label>
                                                <input id="newEmployeeImageURL" type="text" class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" onChange={
                                                        e => setImageUrl(e.target.value)
                                                } />
                                        </div>

                                        <div>
                                                <label htmlFor="newEmployeeEmail" class="block mb-1">Email</label>
                                                <input id="newEmployeeEmail" type="text" class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" onChange={
                                                        e => setEmail(e.target.value)
                                                } />
                                        </div>

                                        <div>
                                                <label htmlFor="newEmployeePhone" class="block mb-1">Phone</label>
                                                <input id="newEmployeePhone" type="text" class="border border-gray-300 w-full rounded-l mb-8 py-1 px-2" onChange={
                                                        e => setPhone(e.target.value)
                                                } />
                                        </div>

                                        <div>
                                                <button type="submit" class="w-full bg-amber-300 p-3 rounded-lg">Submit</button>
                                        </div>
                                </form>
                        </div >
                </div >
        )
}

export default NewEmployee;