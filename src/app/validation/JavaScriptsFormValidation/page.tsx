// import { useState } from "react";

// export default function Register() {

//     const [name,setName] = useState('');
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');
//     const [confirmpassword,setConformPassword] = useState('');
//     const [dateOfBirth,setDateOfBirth] = useState('');
//     const [gender,setGender] = useState('');
//     const [error,setError] = useState('');
    
//     const handleRegister = (e:any) => {
//         e.preventDefault();
//         // const name = document.getElementById("fullname");
//         // const email = document.getElementById("email");
//         // const password = document.getElementById("password");
//         // const confirmpassword = document.getElementById("confirmpassword");
//         // const dateOfBirth = document.getElementById("date");
//         // const gender = document.getElementById("gender");

//         if(!name){
//             setError('name is required!');
//         }else if(!email){
//             setError('email is required!');
//         }else if(!password){
//             setError('password is required!');
//         }else if(!confirmpassword){
//             setError('confirm password is required!');
//         }else if(!dateOfBirth){
//             setError('DateOfBirth is required!');
//         }else if(!gender){
//             setError('Gender is required!');
//         }

//     }


//     return (
//         <>
//             <form className="register" onSubmit={handleRegister}>
//                 <div>
//                     <span>Full Name</span>
//                     <input type="text" id="fullname" required></input>
//                 </div>
//                 <div>
//                     <span>Email</span>
//                     <input type="email" id="email" required></input>
//                 </div>
//                 <div>
//                     <span>Password</span>
//                     <input type="password" id="password" required></input>
//                 </div>
//                 <div>
//                     <span>Confirm Password</span>
//                     <input type="password" id="confirmpassword" required></input>
//                 </div>
//                 <div>
//                     <span>Date of Birth</span>
//                     <input type="date" id="date" required></input>
//                 </div>
//                 <div>
//                     <span>Gender</span>
//                     <select id="gender">
//                         <option value="Select">Select</option>
//                         <option value="Select">Male</option>
//                         <option value="Select">Female</option>
//                     </select>
//                 </div>
//                 <div>
//                     {/* <span>Full Name</span> */}
//                     <input type="submit" id="btnregister" value="Register"></input>
//                 </div>
//             </form>
//         </>
//     );
// } 