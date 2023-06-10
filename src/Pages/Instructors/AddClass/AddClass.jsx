import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
const api = import.meta.env.VITE_imgbb;

const AddClass = () => {
    const { user } = useAuth();
    const apiUrl = `https://api.imgbb.com/1/upload?key=${api}`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
         fetch(apiUrl, {
           method: "POST",
           body: formData,
         }).then((res) => res.json())
        .then(imgResponse => {
            if (imgResponse.success) {
                const img = imgResponse.data.display_url
                const { name, seats, price } = data;
                const insertData = { name, image: img, email: user?.email, insName: user?.displayName, seats:parseInt(seats), price:parseInt(price),status:'Pending' }
                console.log(insertData);
          }
        })
      
  };

  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:flex gap-5">
        <input
          type="text"
          placeholder="Class Name"
          className="input input-bordered input-primary w-full max-w-xs"
          {...register("name",{required:true})}
        />
        <input
          type="file"
          className=" w-[400px] file-input file-input-bordered file-input-primary "
          {...register("image",{required:true})}
        />
      </div>
      <div className="lg:flex gap-5 my-6">
        <input
          readOnly
          type="text"
          defaultValue={user?.displayName}
          className="input input-bordered input-primary w-full max-w-xs"
          
        />{" "}
        <input
         readOnly
          type="email"
          placeholder="Class Name"
          defaultValue={user?.email}
          className="input input-bordered input-primary w-full max-w-xs"
         
        />{" "}
      </div>
      <div className="lg:flex gap-5">
        <input
          type="text"
          placeholder="Available Seats"
          className="input input-bordered input-primary w-full max-w-xs"
          {...register("seats",{required:true})}
        />{" "}
        <input
          {...register("price",{required:true})}
          type="text"
          placeholder="price"
          className="input input-bordered input-primary w-full max-w-xs mb-10"
        />{" "}
      </div>
      <input type="submit" value="Add Class" className="custom_btn" />
    </form>
  );
};

export default AddClass;
