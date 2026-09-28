function PostCard({ post }) {
  return (
    <div className="post-card">
      <p className="category">{post.category}</p>

      <h2>{post.title}</h2>

      <p className="description">{post.description}</p>
    </div>
  );
}

export default PostCard;