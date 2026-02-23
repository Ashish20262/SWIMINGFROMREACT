import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Bounce, toast } from "react-toastify";
import { Success } from "../layout/Massege";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

const SwimmingForm = () => {

  const { register, handleSubmit, reset } = useForm();
  const [members, setMembers] = useState([]);

  const [editid, seteditid] = useState(null)

  function Save(data) {
    if (editid == null) {
      const newData = {
        ...data,
        id: uuidv4()

      }
      console.log(newData)
      setMembers([...members, newData])
      Success("Data added successfully")
    }
    else {
      const newmembers = [...members]
      const index = newmembers.findIndex(members => members.id == editid)

      console.log(data)
      // newmembers[index] = data
      newmembers[index] = {
        ...data,
        id: editid
      }
      setMembers(newmembers)
      seteditid(null)
     Success("data updated successfully")
    }
    reset({
      name: "",
      age: "",
      gender: "",
      mobile: "",
      batch: "",
      duration: ""
    });
  }
  /// data add to local storage
  useEffect(() => {
    if (members.length > 0) {
      localStorage.setItem('swimmingmembers', JSON.stringify(members))
    }
  }, [members])


  useEffect(() => {
    const storedMembers = localStorage.getItem('swimmingmembers');

    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    }
  }, []);

  function trash(id) {
    if (confirm("are you sure ti delete this item ?")) {
      const filteredMembers = members.filter(member => member.id !== id)
      setMembers(filteredMembers)
      if (filteredMembers.length == 0) {
        localStorage.removeItem('swimmingmembers')
      }
      Success("data deleted successfully")
    }
  }

  function update(id) {
    seteditid(id)
    const singlemember = members.find(member => member.id == id)
    console.log(singlemember)
    reset(singlemember)

  }


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Swimming Pool Registration</h2>

      <form onSubmit={handleSubmit(Save)} className="p-4 col-lg-10 mx-auto shadow bg-dark text-white">

        <input type="text" placeholder="Full Name" className="form-control mb-3" {...register("name", { required: true })} />

        <input type="number" placeholder="Age" className="form-control mb-3" {...register("age", { required: true })} />

        <div className="mb-3">
          <label>Gender:</label><br />

          <input type="radio" value="Male" {...register("gender", { required: true })} /> Male

          <input type="radio" value="Female" className="ms-3" {...register("gender")} /> Female
        </div>

        <input type="text" placeholder="Mobile Number" className="form-control mb-3" {...register("mobile", { required: true })} />

        <select className="form-control mb-3" {...register("batch", { required: true })} >
          <option value="">Select Batch</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
        <select className="form-control mb-3" {...register("duration", { required: true })} >
          <option value="">Select Duration</option>
          <option value="1 Month">1 Month</option>
          <option value="3 Months">3 Months</option>
        </select>
        {
          editid == null ?
            <button className="btn btn-primary ">Submit</button>
            :
            <button className="btn btn-success">Update</button>
        }
      </form>

      {/* TABLE */}

      {members.length > 0 && (
        <div className="mt-5">
          <h3 className="text-center mb-3">Registered Members</h3>

          <table className="table table-bordered table-hover table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Batch</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (

                <tr key={member.id}>
                  <td>{index + 1}</td>
                  <td>{member.name}</td>
                  <td>{member.age}</td>
                  <td>{member.gender}</td>
                  <td>{member.mobile}</td>
                  <td>{member.batch}</td>
                  <td>{member.duration}</td>
                  <td>
                    <div className="btn-group">
                      <div onClick={() => trash(member.id)} className="btn btn-danger"><FaTrash /></div>
                      <div onClick={() => update(member.id)} className="btn btn-warning"><FaPen /></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SwimmingForm;
