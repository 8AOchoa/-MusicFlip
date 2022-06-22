import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";



const DisplayAll = () => {
  const [allsongs, setAllsongs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/song")
      .then((response) => {
        console.log(response.data);
        setAllsongs(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [])

  const handleDeletesong = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/song/${idFromBelow}`)
      .then((response) => {
        console.log("success deleting song");
        console.log(response);
        const filteredsongs = allsongs.filter((song) => {
          return song._id !== idFromBelow;
        });
        setAllsongs(filteredsongs);
      })
      .catch((err) => {
        console.log("error deleting song", err.response);
      });
  };
  
  
  return (
    <div className="main-form-container">
    
    <div class= "header-display-all">
    <h1 class= "main-title">All Tracks</h1>
    
    <button  class="add-song-btn"><Link to="/new" className="link-style">Add a Song</Link></button>
    <button  class="add-song-btn"><Link to="/" className="link-style">Go To Music</Link></button>
    </div>
  

      <div className="row">
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Track Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Actions Available</th>
              </tr>
            </thead>
            <tbody>
              {allsongs.map((song, index) => {
                return (
                  <tr key={song._id}>
                    <td>{song.name}</td>
                    <td>{song.type}</td>
                    <td>
                      <Link to = {`/details/${song._id}`}><button className="btn btn-primary">Details</button></Link>
                      <Link to={`/edit/${song._id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>

                      <button
                        onClick={() => handleDeletesong(song._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayAll;