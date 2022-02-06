import { PostCard } from '../PostCard';

import PropTypes from 'prop-types';

import './styles.css';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
};
