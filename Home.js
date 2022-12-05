import React, { Component } from 'react'
import axios from 'axios';
//import Posts from '../models/posts';
//import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }


    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("http://localhost:5678/posts").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }


    onDelete = (id) => {
        axios.delete(`/post/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrievePosts();
        })
    }

    filterData(posts, serachKey) {
        const result = posts.filter((post) => 
            post.name.toLowerCase().includes(serachKey)||
            post.email.toLowerCase().includes(serachKey)||
            post.contact.number().includes(serachKey)
            )
        
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value

        axios.get("/posts").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts,searchKey)
            }
        })
    }


    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h4>All Posts</h4>
                    </div>
                    <div className='col-lg-3 mt-2 mt-2'>
                        <input
                            className='form-control'
                            type='search'
                            placeholder='search'
                            name='searchQuery'
                            onChange={this.handleSearchArea} />
                    </div>
                </div>
                <table className="table table-hover" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>E-mail</th>
                            <th scope='col'>Contact</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>
                                    <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                                        {posts.name}
                                    </a>
                                </td>
                                <td>{posts.email}</td>
                                <td>{posts.contact}</td>
                                <td>
                                    <a className='btn btn-warning' href={`/edit/${posts._id}`} >
                                        <i className='fas fa-edit'></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className='btn btn-danger' href='#' onClick={() => this.onDelete(posts._id)}>
                                        <i className='far fa-trash-alt'></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='btn btn-success'><a href='/add' style={{ textDecoration: 'none', color: 'white' }}>Create New Post</a></button>
            </div>
        )
    }
}
