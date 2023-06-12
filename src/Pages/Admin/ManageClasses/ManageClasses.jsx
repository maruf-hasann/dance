import React, { useState } from "react";
import Text from "../../../Components/GoogleLogin/HeadingText/Text";
import { useQuery } from "react-query";
import axios from "axios";
import Swal from "sweetalert2";


const ManageClasses = () => {
     
  const [idmodal, setIdmodal] = useState(null);
  const { data, refetch } = useQuery(["classes"], async () => {
    const { data } = await axios.get(
      "https://myapp-dun-mu.vercel.app/admin-allClass"
    );
    return data;
  });
  // console.log(data);
  const handleApproved = (id) => {
    fetch(`https://myapp-dun-mu.vercel.app/admin-status/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    const text = event.target.text.value;

    await axios
      .patch(`https://myapp-dun-mu.vercel.app/admin-feedBack?id=${idmodal}`, {
        feedBack: event.target.text.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedback send",
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
            <th>Feedback</th>
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
              <td>
                <button
                  className="custom_btn"
                  onClick={() => {
                    window.my_modal_2.showModal();
                    setIdmodal(d._id);
                  }}
                >
                  Send feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
          <textarea
            className="textarea textarea-primary mb-5"
            placeholder="Write Here . ."
            name="text"
          ></textarea>
          <input type="submit" className="custom_btn" value="Send" />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button >close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;
