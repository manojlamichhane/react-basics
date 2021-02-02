import React, { Component } from 'react';
import {Card,CardBody,CardImg,CardTitle,Spinner} from 'reactstrap'
import axios from 'axios'
import './Posts.css'
import {Link} from 'react-router-dom'

class Photos extends Component {
    state = {
        photos:[],
        isLoading:false
    }
    componentDidMount = () =>{
        this.setState({
            isLoading:true
        })
        axios.get("https://jsonplaceholder.typicode.com/photos")
             .then((res)=>{
                 console.log(res.data)
                 this.setState({
                     ...this.state,
                     photos:res.data,
                     isLoading:false
                 })
             })
             .catch((err)=>{
                console.log(err)
                this.setState({
                    isLoading:false
                })
                })
    }
    render() {
        if(this.state.isloading){
            return(
            <div className="spinner">
            <Spinner size="md" color="primary" />
            </div>
            )
        }
        return (
            <div className="container">
               <h1>Photos</h1>
                {
                this.state.photos.map((photo)=>{
                    return(
                    <div className="photo">
                    <Link to={`/photos/${photo.id}`}>
                    <Card>
                    <CardImg src="" alt={photo.id} />
                    <CardBody>
                    <CardTitle tag="h5">{photo.title}</CardTitle>
                    </CardBody>
                    </Card>
                    </Link>
                    </div>
                    )
                    })
                }
            </div>
        );
    }
}

export default Photos;