import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data</p>;

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={refetch}>Refresh Posts</button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;