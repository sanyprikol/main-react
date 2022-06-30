export default function Posts ({posts}) {
    return (
        <div>
            {posts.map(post => <div key={post.id}> {post.body}</div>)}
        </div>);
}