import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from './axios';
import { useNavigate, useParams } from 'react-router-dom';


function EditEmployee() {
        const [name, setName] = useState('');
        const [employeeCode, setEmployeeCode] = useState('');
        const [jobTitle, setJobTitle] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [imageUrl, setImageUrl] = useState('');

        const navigate = useNavigate();
        const id = useParams().id;

        useEffect(() => {
                const getEmployee = async () => {
                        try {
                                // id can only be in the same string and uses dollar sign and curly braces or it will be passed as an object
                                const employee = await axios.get(`/find/${id}`, {
                                });

                                setName(employee.data.name);
                                setJobTitle(employee.data.jobTitle);
                                setEmail(employee.data.email);
                                setPhone(employee.data.phone);
                                setImageUrl(employee.data.imageUrl);
                                setEmployeeCode(employee.data.employeeCode);

                        } catch (err) {
                                console.log(`Error: ${err.message}`);
                        }
                };
                getEmployee();
        }, []) // only run this when the component didMount


        const updateEmployee = async (e) => {
                e.preventDefault();

                await axios.put('/update', {
                        id: id,
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
                        <div class="w-1/4 h-120 mx-auto">
                                <h2 class="text-center text-xl font-bold my-10">Edit an Employee</h2>
                                <form class="min-w-96 border border-amber-400 rounded-lg p-5" onSubmit={updateEmployee} >
                                        <div class="grid grid-cols-2">
                                                <div class="px-5">
                                                        <img src={imageUrl} alt="" class="border border-gray-300 rounded-lg mx-auto h-56" />
                                                </div>
                                                <div>
                                                        <div class="px-5">
                                                                <label htmlFor="newEmployeeEmployeeCode" class="block mb-1">Employee Code</label>
                                                                <input id="newEmployeeEmployeeCode" type="text" value={employeeCode} class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" required onChange={
                                                                        e => setEmployeeCode(e.target.value)
                                                                } />
                                                        </div>

                                                        <div class="px-5">
                                                                <label htmlFor="newEmployeeName" class="block mb-1">Name</label>
                                                                <input id="newEmployeeName" type="text" value={name} class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" required onChange={
                                                                        e => setName(e.target.value)
                                                                } />
                                                        </div>

                                                        <div class="px-5">
                                                                <label htmlFor="newEmployeeJobTitle" class="block mb-1">Job Title</label>
                                                                <input id="newEmployeeJobTitle" type="text" value={jobTitle} class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" onChange={
                                                                        e => setJobTitle(e.target.value)
                                                                } />
                                                        </div>
                                                </div>
                                        </div>

                                        <div class="px-5">
                                                <label htmlFor="newEmployeeImageURL" class="block mb-1">Image URL</label>
                                                <input id="newEmployeeImageURL" type="text" value={imageUrl} class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" onChange={
                                                        e => setImageUrl(e.target.value)
                                                } />
                                        </div>

                                        <div class="px-5">
                                                <label htmlFor="newEmployeeEmail" class="block mb-1">Email</label>
                                                <input id="newEmployeeEmail" type="text" value={email} class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" onChange={
                                                        e => setEmail(e.target.value)
                                                } />
                                        </div>

                                        <div class="px-5">
                                                <label htmlFor="newEmployeePhone" class="block mb-1">Phone</label>
                                                <input id="newEmployeePhone" type="text" value={phone} class="border border-gray-300 w-full rounded-l mb-5 py-1 px-2" onChange={
                                                        e => setPhone(e.target.value)
                                                } />
                                        </div>



                                        <div class="p-5">
                                                <button type="submit" class="w-full bg-amber-300 p-3 rounded-lg">Submit</button>
                                        </div>
                                </form>
                        </div >
                </div >
        )
}

export default EditEmployee;
