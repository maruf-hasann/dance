import React from "react";
import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Text from "../../../Components/GoogleLogin/HeadingText/Text";

const MyClass = () => {
  const { user,loader } = useAuth();
  const { data } = useQuery({
    queryKey: ["email", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/all-classes?email=${user?.email}`
      );
      return data;
    },
  });
    console.log(data);

  return (
      <div className="overflow-x-auto w-full">
          <Text text='My Classes'></Text>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="font-semibold">
            <th></th>
            <th>Image</th>
            <th> Name</th>
            <th> Enrolled Students</th>
            <th>Status</th>
            <th>FeedBack</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
                  {
                      data?.map((d,index) => <tr key={d._id}>
                          <td>{index + 1 }</td>
                          <td><img src={d?.image} width='40px' alt="" /></td>
                          <td>{d?.name}</td>
                          <td>{d?.enroll || 0}</td>
                          <td className="font-semibold text-purple-950">{d?.status}</td>
                          <td>{d?.feedBack}</td>
                          <td><button className="btn bg-purple-300">Update</button></td>
                   </tr>)   
                }  
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
