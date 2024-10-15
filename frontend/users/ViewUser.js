import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function ViewUser() {

    const {id}=useParams()
    
    const [users,setUsers]=useState([])

    useEffect(()=>{
        loadUsers()
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUsers(result.data);
    }
    
  return (
    <div classNameName='container'>
        <div classNameName='my-4'>
        <div className="flex flex-col">
      <div className=" overflow-x-auto">
         <div className="min-w-full inline-block align-middle">
             <div className="overflow-hidden border rounded-lg border-gray-300 py-4 px-4">
                 <table className=" min-w-full  rounded-xl table border shadow ">
                     <thead>
                         <tr className="">
                             <th scope="col " className="p-5 bg-gray-50 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Id </th>
                             <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Name </th>
                             <th scope="col " className="p-5 bg-gray-50 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Username </th>
                             <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Email </th>
                             
                        </tr>
                     </thead>
                     <tbody className="">

                         
                         
                            <tr>
                             <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 bg-gray-50 "> {users.id}</td>
                             <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {users.name} </td>
                             <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 bg-gray-50"> {users.username}</td>
                             <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {users.email}</td>
                             


                         </tr>
                         
                         
                         
                     </tbody>
                 </table>
             </div>
         </div>
      </div>
      </div>
        </div>
    </div>
  )
}
