import React, { Component } from 'react'
import axios from 'axios'

export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post:{}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }
        });
    }


    render() {
        const {name,email,contact}=this.state.post;
        return (
            <div style={{marginTop:"20px"}}>
                <h4>{name}</h4>
                <hr/>

                <dl className='row'>
                    <dt className='col-sm-3'>Email</dt>
                    <dd className='col-sm-9'>{email}</dd>

                    <dt className='col-sm-3'>Contact</dt>
                    <dd className='col-sm-9'>{contact}</dd>

                </dl>
            
            </div>
        )
    }
}
