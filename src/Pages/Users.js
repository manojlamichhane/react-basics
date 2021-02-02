import React, { Component } from 'react';
import {
    Card, CardBody, Media,
    CardFooter, CardSubtitle, Spinner
  } from 'reactstrap';
import './Posts.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Users extends Component {
    
    state = {
         users:[],
         isloading:false
         
      }
    
    componentDidMount = () => {
        this.setState({
            ...this.state,
            isloading:true
        })
        axios.get("https://jsonplaceholder.typicode.com/users")
             .then((res)=>{
                this.setState({
                    ...this.state,
                    users:res.data,
                    isloading:false
                })
                })
             .catch((err)=>{
                console.log(err)
                this.setState({
                    ...this.state,
                    isloading:false
                })
                })
    }
    

    
    render() {

        if(this.state.isloading){
            return( 
            <div className="spinner">
            <Spinner size="md" color="primary" />
            </div>)
            }
        return (
        <div className="container">
         <h1>Users</h1>   
        {
        this.state.users.map((user)=>{
        return(    
        <div className="division">
        <Link to={`/users/${user.id}`}>
        <Card key={user.id}>
        <CardBody>
            <Media>
            <Media >
            <Media object data-src="holder.js/64x64" alt={user.name.charAt(0)+user.name.charAt(1)} />
            </Media>
            <Media body>
            <Media heading>{user.name}</Media>
            {user.email}
            </Media>
            </Media>  
        </CardBody>
        <CardFooter>
            <CardSubtitle> Created By : {user.name} </CardSubtitle>
        </CardFooter>
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

export default Users;