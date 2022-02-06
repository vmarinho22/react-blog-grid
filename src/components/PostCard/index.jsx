import './styles.css';

import PropTypes from 'prop-types';

export const PostCard = (props) => {
  return (
    <div className="post">
      <img src={props.cover} alt={props.title} />
      <div className="post-content">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
