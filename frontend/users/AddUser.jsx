import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AddUser() {
  let navigate = useNavigate();


  const [user, setUser] = useState({//le hook useState permet de capturer es valeurs des champs du formulaire et de les stocker dans l'etat local user.
    name: "",
    username: "",
    email: "",
  });


  const { name, username, email } = user;



  const onInputChange = (e) => {//cette fonction est appellée chaque fois que l'utilisateur modifie un champ
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {//cette fonction est declenché quand le formulaire se valide et il s'envpie dans la bdd
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user", user);
      navigate("/");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };
  return (
    <>
      <div className='container flex items-center justify-center min-h-screen'> {/* Centrage vertical et horizontal */}
        <div className='px-8 md:px-16 lg:px-64'> {/* Ajuster les paddings */}
          <div className='border rounded-xl border-gray-300 shadow my-12'>
            <h2 className='text-center text-3xl font-bold pt-12'>Register Form</h2>
            <form onSubmit={onSubmit} className="lg:p-16 p-6">
              <div className="relative mb-6">
                <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                  Username 
                  <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                  </svg>
                </label>
                <input 
                  onChange={onInputChange} 
                  value={username} 
                  name="username" 
                  type="text" 
                  className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" 
                  placeholder="Username..." 
                  required 
                />
              </div>
              <div className="relative mb-6">
                <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                  Full Name 
                  <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                  </svg>
                </label>
                <input 
                  onChange={onInputChange} 
                  value={name} 
                  name="name" 
                  type="text" 
                  className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" 
                  placeholder="Name..." 
                  required 
                />
              </div>
              
              <div className="relative mb-6">
                <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                  Email 
                  <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                  </svg>
                </label>
                <input 
                  onChange={onInputChange} 
                  value={email} 
                  name="email" 
                  type="email" 
                  className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" 
                  placeholder="Email address..." 
                  required 
                />
              </div>

              <div className='flex justify-center'>
                <button 
                  type="submit" 
                  className="w-52 h-12 shadow-sm rounded-full border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-700 text-base font-semibold leading-7 mx-2"
                >
                  Submit
                </button>
                  <Link  className="w-52 h-12 shadow-sm rounded-full border border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition-all duration-700 text-base font-semibold leading-7 mx-2" to ="/" >
                    Cancel
                 </Link> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
