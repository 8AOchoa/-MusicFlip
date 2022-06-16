import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const PetForm = ()=> {
    



  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  
  
  
  const submitHandler = (e) => {
      e.preventDefault();

      axios.post("http://localhost:8000/api/author", {
          name,
          type,
          description,

      })
      .then((res)=>{
        console.log(res);
        console.log(res.data);

        setName("");
        setType("");
        setDescription("");
        navigate("/playerapp");
      }) 
      .catch((err)=>{
        console.log(err);
        
    })
  }

    
  return (
  
    <div>


        


        <div  className="form-container">
        <button  class="add-song-btn"><Link to="/tracks" className="link-style">All Tracks</Link></button>
        <h1 class= "main-title">Add Songs</h1>


        <form onSubmit={submitHandler} className="add-song-form">
            <div className="form-fields">
                <label>Song</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    //We set our value to title here mainly to help us clear out the inputs on submission
                    value={name}
                    name="name"
                    type="text"
                />
            </div>

            <br />

            <div className="form-fields">
                <label>Artist</label>
                <input
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    name="type"
                    type="text"
                />
            </div>

            <br />

            <div className="form-fields">
                <label>Genre</label>
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                />
            </div>

            <br />
            {/* Could also be a button element. Try it! */}
            <input className="submit-input" type="submit" value="Add Song" />
            
        </form>
        </div>
    </div>
);
};


export default PetForm;



