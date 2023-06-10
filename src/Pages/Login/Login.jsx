import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from "../../assets/log.json";
import useTitle from "../../Hooks/useTitle";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Google from "../../Components/GoogleLogin/Google";

const Login = () => {
  // TODO
  const [show, setShow] = useState('password')
  const {loginUser} = useAuth()
    useTitle('Login')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(resut => {
        const user = resut.user
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Done",
          showConfirmButton: false,
          timer: 1500,
        });
    })
  };
  const passwordShow = () => {
   setShow('text')
  }
  return (
    <div className="my_container">
      <h1 className="text-center text-4xl font-bold">Login</h1>
      <div className="lg:flex lg:items-center">
        <div className="lg:w-3/5">
          <Lottie animationData={animation}></Lottie>
        </div>
        <div className="lg:w-2/5 rounded-3xl bg-[#fbf9ff]  px-20 py-20">
          <form className="space-y-4 py-8" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs"
               {...register("email", { required: true })}
            />{" "}
            <br />
            <div className="flex">
              <input
                type={show}
                placeholder="Password"
                {...register("password", { required: true })}
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <FiEye
                onClick={passwordShow}
                className="text-xl relative right-7 mt-4"
              />
            </div>
            <br />
            <input
              className="max-w-xs w-full custom_btn"
              type="submit"
              value="Login"
            />
          </form>
          <div>
            <p>
              Doesn't have an account?{" "}
              <Link to="/register" className="font-semibold text-[#522ab6]">
                Sign Up
              </Link>
            </p>
          </div>
          <Google></Google>
        </div>
      </div>
    </div>
  );
};

export default Login;
