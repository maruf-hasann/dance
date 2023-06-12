import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import { AiOutlineDelete } from "react-icons/ai";
import Text from "../../../Components/GoogleLogin/HeadingText/Text";
import { Link, useFetcher } from "react-router-dom";
import Swal from "sweetalert2";


const SelectedClass = () => {
  const { user, loader,setLoader} = useAuth();
 

  const { data, refetch } = useQuery(["Email"], async () => {
    const res = await axios.get(
      `https://b7a12-summer-camp-server-side-maruf-hasann.vercel.app/studentSelect?email=${user?.email}`
    );
   
    return res.data;
  });
//   console.log(data);
  const handleDelete = async (id) => {
     
    const res = await axios.delete(
      `https://b7a12-summer-camp-server-side-maruf-hasann.vercel.app/delete?id=${id}`
    );
    if (res.data.deletedCount > 0) {
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class remove",
        showConfirmButton: false,
        timer: 1500,
      });
    }
   
  }
  // const handlePay = () => {
  //   console.log('clicking');
  // }
 
  return (
    <div className="overflow-x-auto w-full my_container">
      <Text text="My Selected Classes"></Text>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Pay</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d, index) => (
            <tr key={d._id}>
              <td>{index + 1}</td>
              <td>
                <img src={d?.image} width="40px" height="35px" alt="" />
              </td>
              <td>{d?.name}</td>
              <td>$ {d?.price}</td>
              <td>{d?.seats}</td>
              <td>
                <button className="custom_btn">
                  <Link to={`/dashboard/payment/${d.price}`}>Pay</Link>
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(d._id)}>
                  <AiOutlineDelete className="text-2xl text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
