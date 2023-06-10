import React, { useContext } from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/142230-login.json";
import Google from '../../Components/GoogleLogin/Google';
import useTitle from '../../Hooks/useTitle';
import { useForm } from 'react-hook-form';
import { authContext } from '../../Provider/AuthProvider';
import useAuth from '../../Hooks/useAuth';
import Swal from "sweetalert2";


const Register = () => {
    
  const { createUser, updateUserProfile } = useAuth();
  useTitle('Register')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        updateUserProfile(data.name, data.photo)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        
        if (user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account create Done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
    .catch(err => console.log(err))
  };

 
    return (
      <div className="my_container">
        <h1 className="text-center text-4xl font-bold">Register</h1>
        <div className="lg:flex lg:items-center">
          <div className="lg:w-3/5">
            <Lottie animationData={animation}></Lottie>
          </div>
          <div className="lg:w-2/5 rounded-3xl bg-[#fbf9ff]  px-20 py-20">
            <form className="space-y-4 py-8 " onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("name", { required: true })}
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <br />
              <input
                type="password"
            
                placeholder="Password"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("password", { required: true })}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("photo", { required: true })}
              />

              <br />
              <input
                className="max-w-xs w-full custom_btn"
                type="submit"
                value="Register"
              />
            </form>
            <Google></Google>
          </div>
        </div>
      </div>
    );
};

export default Register;