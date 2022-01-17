import Comment from "./Comment";

const CommentsList = ({ commentsList }) => {
  return (
    <div>
      <h2>Comentarios de usuarios</h2>
      {commentsList.length === 0 ? (
        <h4>Esperamos tus comentarios!</h4>
      ) : (
        <ul>
          {commentsList.map((comment) => (
            <Comment key={comment.id} suggestion={comment.suggestion} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default CommentsList;
