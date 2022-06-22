import React, {useEffect, useState} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DisplaysongDetails= (props)=> {

    const {id} = useParams();

    const[songName, setsongName] = useState({});
    const[type, setType] = useState({});
    const[description, setDescription] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/song/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setsongName(res.data);
        })
        .catch((err)=> console.log(err))
    },[id])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/song/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setType(res.data);
        })
        .catch((err)=> console.log(err))
    },[id])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/song/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setDescription(res.data);
        })
        .catch((err)=> console.log(err))
    },[id])


    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/song/${id}`)
        .then((res)=> {
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

    return(
        
        <div className="top-details">
        <Link to= {"/"} className="home-btn">Go Home</Link>
        <h1 class= "main-title">Song Details</h1>   
        <div/>
        <div className= "bottom-details">
        <h2>Details About: {songName.name}</h2>
        <p>Artist:  {type.type}</p>
        <p>Genre: {description.description}</p>
        <button onClick ={deleteFilter}>Delete</button>
        </div>      
      
    </div>
    );




}

export default DisplaysongDetails;