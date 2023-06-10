import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const Users = () => {
  // const [active,setActive] = useState(disabled)
    const { data: users = [],refetch } = useQuery(['users'], async () => {
        const res = await axios.get("http://localhost:5000/users")
        return res.data;
    })
    // make Admin
    const handleMakeAdmin = (user) => {

      fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method:'PATCH',
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount) {
            refetch()
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: `${user?.name} is an Admin Now`,
             showConfirmButton: false,
             timer: 1000,
           });
        }
      })
  }
  
  const handleMakeInstructor = (user) => {

   fetch(`http://localhost:5000/users/instructor/${user._id}`, {
     method: "PATCH",
   })
      .then(res => res.json())
     .then(data => {
       if (data.modifiedCount) {
         refetch();
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: `${user?.name} is an Instructor Now`,
           showConfirmButton: false,
           timer: 1000,
         });
      }
    })

  }

    return (
      <div className="overflow-x-auto max-w-full">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="font-semibold">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th> Admin</th>
              <th> Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <button
                    className="custom_btn disabled:opacity-20"
                    onClick={(event) => {
                      event.target.disabled = true;
                      handleMakeAdmin(user);
                    }}
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    onClick={(event) => {
                      event.target.disabled = true;
                      handleMakeInstructor(user);
                    }}
                    className="custom_btn"
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Users;