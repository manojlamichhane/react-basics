import React,{useState,useEffect} from 'react';
import  './Posts.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import {useParams} from 'react-router-dom'

function User(props) {

const id = useParams("id");    
const [user,setuser] = useState({});
    
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
         .then((res)=>setuser((res.data.find((item)=>item.id==id.id))))
         .catch((err)=>console.log(err))   
        },[])
    console.log(user)
    return (
        <div className="container">
            <Form className="form">
              <FormGroup row>
                <Label sm={2}>Name</Label>
                <Col sm={10}>
                <Label sm={2}>{user.name}</Label>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label sm={2}>Phone</Label>
                <Col sm={10}>
                <Label sm={6}>{user.phone}</Label>    
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label sm={2}>Address</Label>
                <Col sm={10}>
                <Label sm={10}>{user.address && user.address.street}, {user.address && user.address.city}</Label>    
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label sm={2}>Website</Label>
                <Col sm={10}>
                <Label sm={2}>{user.website}</Label>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label sm={2}>Company</Label>
                <Col sm={10}>
                <Label sm={10}>{user.company && user.company.name}</Label>
                </Col>
                </FormGroup>
            </Form>
        </div>
    );
}
export default User;