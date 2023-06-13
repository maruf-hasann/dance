
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    fetch(`https://dance-ten.vercel.app/payment-history?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, []);

  const history = payment.reverse()
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Transaction ID</th>

            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((pay,index) => (
            <tr key={pay._id}>
              <td>{index + 1}</td>
              <td>{pay?.email}</td>
              <td>{pay?.transactionId}</td>
              <td>{pay?.price}</td>
              <td>{pay?.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;


