import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {


    const {id}=useParams();
    const [users,setUsers]=useState([])

    useEffect(()=>{
        loadUsers()
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }
    const deleteuser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
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
                             <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Action </th>
                        </tr>
                     </thead>
                     <tbody className="">

                         {
                         users.map((user,index)=>(
                            <tr>
                             <td key={index} className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 bg-gray-50 "> {index+1}</td>
                             <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {user.name} </td>
                             <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 bg-gray-50"> {user.username}</td>
                             <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {user.email}</td>
                             <td>
                                <Link to={`/ViewUser/${user.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">View</Link>
                                <Link to={`/editUser/${user.id}`} className="bg-transparent border border-green-500 text-green-500 font-bold py-2 px-4 rounded hover:bg-green-500 hover:text-white mx-2">
                                        Edit
                                </Link>
                                <button onClick={()=>deleteuser(user.id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">Delete</button>
                            </td>


                         </tr>
                         ))}
                         
                         
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
