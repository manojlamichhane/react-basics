import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './Posts.css'

function Photo(props) {

    const [filtered,setfiltered]=useState({})
    const id = useParams("id")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
             .then((res)=>{
                setfiltered(res.data.find((photo)=>photo.id==id.id))    
             })
             .catch((err)=>console.log(err))
    },[])
    
    return (
        <div className="container">
            <h1>Photo</h1>
            <img className="image" src={filtered.url}></img>
            <p>{filtered.title}</p> 
        </div>
    );
}

export default Photo;