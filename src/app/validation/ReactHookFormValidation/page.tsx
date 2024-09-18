'use client'
import { useForm } from 'react-hook-form';
 
export default function MyForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const password = watch('password');
 
  const onSubmit = (data:any) => {
    console.log(data);
    alert("Register Succesfully");
  };
 
  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
 
        Full Name: <input
        type='text'
          {...register("fullname", {
            required: true,
            pattern: /^[A-Za-z]+$/i, 
          })}
        />
        {errors.fullname && <span>Full name is required and should only contain alphabets.</span>}
        <br/>
 
        Email: <input
        type='email'
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  
          })}
        />
        {errors.email && <span>Invalid email address.</span>}
        <br/>
 
        Password: <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8 
          })}
        />
        {errors.password && <span>Password is required and must be at least 8 characters long.</span>}
        <br/>
 
        Confirm Password: <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password || "Passwords do not match"
          })}
        />
        {errors.confirmPassword && <span>{typeof errors.confirmPassword.message === 'string' ? errors.confirmPassword.message : "Passwords do not match"}</span>}
        <br/>
 
        Date of Birth: <input
          type="date"
          {...register("dateOfBirth", { required: true })}
        />
        {errors.dateOfBirth && <span>Date of Birth is required.</span>}
        <br/>
 
        Gender:
        <select {...register("gender", { required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span>Gender is required.</span>}
        <br/>
 
        <input type="submit" className='register' value="Register"/>
      </form>
    </>
  );
}