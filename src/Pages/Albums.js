import React, { Component } from 'react';
import {Media} from 'reactstrap'
import axios from 'axios'

class Albums extends Component {
    state = {
        albums:[],
        isloading:false
    }
    componentDidMount = () =>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
             .then((res)=>{
                 this.setState({
                     ...this.state,
                     albums:res.data
                 })
             })
             .catch((err)=>console.log(err))
    }
    render() {
        return (
            <div>
            <h1>This is album page</h1>
            {
            this.state.albums.map((album)=>{
                return(
                    <Media>
                    <Media left href="#">
                    <Media object data-src="holder.js/64x64" alt={album.id} />
                    </Media>
                    <Media body>
                    <Media heading>
                    {album.title}
                    </Media>
                    </Media>
                    </Media>
                    )
                })
            }
            </div>
        );
    }
}

export default Albums;