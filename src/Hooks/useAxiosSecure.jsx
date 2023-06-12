import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
  baseURL: "https://b7a12-summer-camp-server-side-maruf-hasann.vercel.app",
});

const useAxiosSecure = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await 
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [ navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;