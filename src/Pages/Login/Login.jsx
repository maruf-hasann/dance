import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from "../../assets/log.json";
import useTitle from "../../Hooks/useTitle";
import { Link } from "react-router-dom";
import { FiEye} from "react-icons/fi";
const Login = () => {
  const [show,setShow] = useState('password')
    useTitle('Login')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
          <form className="space-y-4 py-8 ">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs"
            />{" "}
            <br />
            <div className="flex">
              <input
                type={show}
                placeholder="Password"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <FiEye
                onClick={passwordShow}
                className="text-xl relative right-7 mt-4"
              />
            </div>
            <br />
            <input
              className="max-w-xs w-full px-11 text-white font-semibold rounded-3xl block lg:ms-0 bg-[#9672f0] py-3"
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
        </div>
      </div>
    </div>
  );
};

export default Login;
