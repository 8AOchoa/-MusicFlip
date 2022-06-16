import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";



const DisplayAll = () => {
  const [allAuthors, setAllAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((response) => {
        console.log(response.data);
        setAllAuthors(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleDeleteAuthor = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/author/${idFromBelow}`)
      .then((response) => {
        console.log("success deleting author");
        console.log(response);
        const filteredAuthors = allAuthors.filter((author) => {
          return author._id !== idFromBelow;
        });
        setAllAuthors(filteredAuthors);
      })
      .catch((err) => {
        console.log("error deleting author", err.response);
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
              {allAuthors.map((author, index) => {
                return (
                  <tr key={author._id}>
                    <td>{author.name}</td>
                    <td>{author.type}</td>
                    <td>
                      <Link to = {`/details/${author._id}`}><button className="btn btn-primary">Details</button></Link>
                      <Link to={`/edit/${author._id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>

                      <button
                        onClick={() => handleDeleteAuthor(author._id)}
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