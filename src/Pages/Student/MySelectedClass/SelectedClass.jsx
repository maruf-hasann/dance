import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import { AiOutlineDelete } from "react-icons/ai";
import Text from "../../../Components/GoogleLogin/HeadingText/Text";

const SelectedClass = () => {
  const { user, loader } = useAuth();

  const { data, refetch } = useQuery(["Email"], async () => {
    const res = await axios.get(
      `http://localhost:5000/studentSelect?email=${user?.email}`
    );
    return res.data;
  });
//   console.log(data);

  return (
      <div className="overflow-x-auto w-full my_container">
          <Text text='My Selected Classes'></Text>
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
                <button className="custom_btn">Pay</button>
              </td>
              <td>
                <button>
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
