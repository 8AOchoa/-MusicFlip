import React, {useEffect, useState} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DisplayPetDetails= (props)=> {

    const {id} = useParams();

    const[petName, setPetName] = useState({});
    const[type, setType] = useState({});
    const[description, setDescription] = useState({});

    const navigate = useNavigate();

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
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setType(res.data);
        })
        .catch((err)=> console.log(err))
    },[id])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setDescription(res.data);
        })
        .catch((err)=> console.log(err))
    },[id])


    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
        .then((res)=> {
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

    return(
        
        <div className="top-details">
        <Link to= {"/"} className="home-btn">Go Home</Link>
        <h1 class= "main-title">Pet Shelter</h1>   
        <div/>
        <div className= "bottom-details">
        <h2>Details About: {petName.name}</h2>
        <p>Pet Type: {type.type}</p>
        <p>Description: {description.description}</p>
        <button onClick ={deleteFilter}>Adopt</button>
        </div>      
      
    </div>
    );




}

export default DisplayPetDetails;