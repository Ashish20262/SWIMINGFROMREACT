import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Success } from "../layout/Massege";

const Reagistation = () => {

  const navigate = useNavigate();
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));

    console.log(data);  
    reset();
    Success("Login successful")
     navigate("/login");
    // navigate("/swimming-form");
  };

  return (
    <form className="col-xl-6 shadow mx-auto p-5 mt-5" onSubmit={handleSubmit(onSubmit)} >

      <div className="mt-4">
        <input type="text" placeholder="Username" className="form-control"  {...register("username", { required: true })}/>
      </div>

      <div className="mt-4">
        <input
          type="email" placeholder="Email" className="form-control" {...register("email", { required: true })}/>
      </div>

      <div className="mt-4">
        <input type="password" placeholder="Password" className="form-control" {...register("password", { required: true })} />
      </div>

      <div className="mt-4">
        <input type="number" placeholder="Mobile Number" className="form-control" {...register("mobile", { required: true })}/>
      </div>

      <div className="mt-4">
        <button type="submit" className="btn btn-primary ">Register</button>
      </div>

    </form>
  );
};

export default Reagistation;
