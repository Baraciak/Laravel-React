import React from 'react'

const Post = ({postData}) => {
    return (
        <div className="card">
            <div className="card-header">
                {postData.title}
            </div>
            <div className="card-body">
                {postData.body}
            </div>
        </div>
    )
}

export default Post;
