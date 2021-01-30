import React, { Component } from 'react';
import {
    Card, CardText, CardBody, Media,
    CardTitle, CardFooter, CardSubtitle, Button, Spinner, Progress
  } from 'reactstrap';
import './Posts.css'
import axios from 'axios'

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
        <div>
        {
        this.state.users.map((user)=>{
        return(    
        <div className="posts">
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
        </div>
        )
        })
        }
        </div>
        );
    }
}

export default Users;