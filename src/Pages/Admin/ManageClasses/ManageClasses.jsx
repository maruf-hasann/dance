import React from "react";
import Text from "../../../Components/GoogleLogin/HeadingText/Text";
import { useQuery } from "react-query";
import axios from "axios";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { data, refetch } = useQuery(["classes"], async () => {
    const { data } = await axios.get("http://localhost:5000/admin-allClass");
    return data;
  });
  // console.log(data);
  const handleApproved = (id) => {
    fetch(`http://localhost:5000/admin-status/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
          if (data.modifiedCount) {
            refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Approved Done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="overflow-x-auto w-full">
      <Text text="All Classes"></Text>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="font-semibold">
            <th></th>
            <th>Image</th>
            <th> Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d, index) => (
            <tr key={d._id}>
              <td>{index + 1}</td>
              <td>
                <img src={d?.image} alt="" width="40" />
              </td>
              <td>{d?.name}</td>
              <td>{d?.insName}</td>
              <td>{d?.email}</td>
              <td>{d?.seats}</td>
              <td>{d?.price}</td>
              <td>{d?.status}</td>
              <td>
                <button
                  onClick={() => {
                    handleApproved(d._id);
                    event.target.disabled = true;
                  }}
                  className="btn bg-green-200 disabled:bg-gray-200"
                >
                  Approved
                </button>{" "}
                <button className="btn bg-red-300">Denied</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
