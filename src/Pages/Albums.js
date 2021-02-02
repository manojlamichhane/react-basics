import React, { Component } from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,Spinner} from 'reactstrap'
import axios from 'axios'
import './Posts.css'
import {Link} from 'react-router-dom'

class Albums extends Component {
    state = {
        albums:[],
        isloading:false
    }
    componentDidMount = () =>{
        this.setState({
            ...this.state,
            isloading:true
        })
        axios.get("https://jsonplaceholder.typicode.com/albums")
             .then((res)=>{
                 this.setState({
                     ...this.state,
                     albums:res.data,
                     isloading:false
                 })
             })
             .catch((err)=>{
                 this.setState({
                     isloading:false
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
            <h1>Albums</h1>
            {
            this.state.albums.map((album)=>{
                return(
                    <div className="division">
                    <Link to="/photos">
                    <Card>
                    <CardImg   src="" alt={album.albumId} />
                    <CardBody>
                    <CardTitle tag="h5">{album.title}</CardTitle>    
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

export default Albums;