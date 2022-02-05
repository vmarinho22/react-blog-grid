import './styles.css';

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
