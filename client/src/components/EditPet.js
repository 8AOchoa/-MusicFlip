import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditPet = (props) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [type, setType]= useState("");
  const [description, setDescription]= useState("")
  const[petName, setPetName] = useState({});
  // const [skill1, setSkill1]= useState("")
  // const [skill2, setSkill2]= useState("")
  // const [skill3, setSkill3]= useState("")
  const [errors, setErrors] = useState({});
  const [petNotFoundError, setPetNotFoundError] = useState("");
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${id}`)
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        setPetName(res.data);
    })
    .catch((err)=> console.log(err))
},[id])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author", { name,type, description})
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setType(response.data.name);
        setDescription(response.data.name);
      })
      .catch((err) => {
        console.log(err.response);
        setPetNotFoundError(`Pet not found using that ID`);
      });

    }, );

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/author/${id}`, { name,type, description})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
      
  };
  return (
    <form onSubmit={submitHandler}>
      {petNotFoundError ? (
        <h2>
          {petNotFoundError} <Link to="/new">Click here to add author</Link>
        </h2>
      ) : null}
        <Link to="/" className="home-btn"><btn>Home</btn></Link>
        <h1 class= "main-title">Pet Shelter</h1>
      <h2>Edit: {petName.name}</h2>
  <div  className="edit-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </div>
      <div className="form-group">
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </div>


      <button type="submit" className="btn btn-primary">
        SUBMIT
      </button>
      </div>
    </form>
  );
};

export default EditPet;