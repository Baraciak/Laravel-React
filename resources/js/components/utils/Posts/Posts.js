import React, { Component } from 'react';
import Post from "./Post";

class Posts extends Component {
    state = {
        posts: [],
        postsFetched: false
    }

    componentDidMount = () =>{
        this.fetchPosts();
    }

    render() {
        const {posts, postsFetched} = this.state;
        return (
            <div role="posts">
                <section className="jumbotron text-left">
                    <div className="container">
                        <h1>Posts List</h1>
                        {
                        postsFetched 
                        ? posts.map(postData => <Post key={postData.id} postData={postData} />)
                        : <p>Loading...</p>
                        }
                    </div>
                </section>
            </div>
        )
    }

    fetchPosts = async() => {
        return await axios.get('http://localhost:8000/api/posts')
        .then(response => response.data)
        .then(resJson => {
            this.setState({posts: resJson, postsFetched: true});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

export default Posts;
