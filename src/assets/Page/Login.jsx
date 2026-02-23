import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {

    const savedUser = JSON.parse(localStorage.getItem("user"));

    console.log("Saved User:", savedUser);
    console.log("Login Data:", data);

    if (
      savedUser &&
      savedUser.email?.trim() === data.email?.trim() &&
      savedUser.password?.trim() === data.password?.trim()
    ) {
      toast.success("Login successful");
      navigate("/swimming-form");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <form
      className="col-xl-6 shadow mx-auto p-5 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >

      <input
        {...register("email", { required: true })}
        placeholder="Email"
        className="form-control mt-3"
      />

      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
        className="form-control mt-3"
      />

      <button className="btn btn-success mt-4" type="submit">
        Login
      </button>

    </form>
  );
};

export default Login;
