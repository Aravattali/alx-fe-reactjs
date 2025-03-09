import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { postId } = useParams();  // Extract dynamic postId from URL
    return <div>Blog Post ID: {postId}</div>;
};

export default BlogPost;