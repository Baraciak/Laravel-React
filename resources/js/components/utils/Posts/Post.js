import React from 'react'

const Post = ({postData}) => {
    return (
        <React.Fragment>
            <small className="ml-1 text-secondary">User: {postData.userId}</small>
            <div className="card">
                <div className="card-header">
                    {postData.title}
                    
                </div>
                <div className="card-body">
                    {postData.body}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Post;
