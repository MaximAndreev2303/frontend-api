import type { Post } from "../types/Post";

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <div className="post-card">
      {/* Обращаемся к полю name у категории, если оно есть */}
      <span className="category">{post.category?.name || 'Без категорії'}</span>
      
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      
      {/* Обращаемся к полю email у автора, если оно есть */}
      <small>Автор: {post.author?.email || 'Невідомий'}</small>
    </div>
  );
}

export default PostCard;