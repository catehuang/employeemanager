import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Employee({ employeeId, imageUrl, name , email, phone, jobTitle, employeeCode }) {

        const navigate = useNavigate();
        const id = {employeeId};

        const deleteEmployee = async (id) => {
                try {
                        await axios.delete(`/delete/${id}`).then(
                                ()=> {
                                 navigate('/');       
                                }
                        )
                } catch (err) {
                        console.log(`Error: ${err.message}`);
                }
        };

        return (
                <div class="w-80 h-96 py-10 px-8 bg-white rounded-xl grid grid-row-5 gap-4 border border-solid border-gray-200">
                        <div class="grid row-span-2 grid-cols-3 gap-4 h-40">
                                <img src={imageUrl} alt="image" class="col-span-2 rounded-xl" />
                                <div class="grid grid-flow-row">
                                        <div class="text-l font-bold align-middle">
                                                <p>{name}</p>
                                        </div>
                                        <p>{jobTitle}</p>
                                </div>
                        </div>
                        <p>{employeeCode}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <div class="flex flex-row-reverse gap-2">
                                <div class="bg-amber-200 border border-gray-400 rounded-lg p-2" onClick={deleteEmployee}>
                                        <DeleteIcon /> 
                                </div>                                
                                <div class="bg-amber-200 border border-gray-400 rounded-lg p-2">
                                        <EditIcon /> 
                                </div>
                        </div>

                </div >
        )
}

export default Employee;
