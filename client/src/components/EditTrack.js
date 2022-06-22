import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditTrack = (props) => {
  const { id } = useParams();
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [errors, setErrors] = useState({});
  const [songNotFoundError, setsongNotFoundError] = useState("");
  const navigate = useNavigate();

  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/song/${id}`)
      .then((response) => {
        console.log(response.data);
        setSongName(response.data.name);
        setArtistName(response.data.type);
      })
      .catch((err) => {
        console.log(err.response);
        setsongNotFoundError(`song not found using that ID`);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/song/${id}`, {
        
      name: songName, 

      type: artistName
    
    
    })
      .then((response) => {
        console.log(response);
        navigate("/tracks");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      {songNotFoundError ? (
        <h2>
          {songNotFoundError} <Link to="/new">Click here to add song</Link>
        </h2>
      ) : null}
      <button  class="add-song-btn"><Link to="/tracks" className="link-style">All Tracks</Link></button>
      <button  className="add-song-btn"><Link to="/" className="link-style" >Add a Song</Link></button>
      <div className="form-group">
        <label htmlFor="name">Song Title</label>
        <input
          type="text"
          id="name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
        <label htmlFor="name">Artist</label>
        <input
          type="text"
          id="type"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Edit Song
      </button>
    </form>
  );
};

export default EditTrack