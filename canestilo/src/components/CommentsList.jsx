import Comment from "./Comment";

const CommentsList = ({ commentsList }) => {
  return (
    <div>
      <h2>Comentarios</h2>
      {commentsList.length === 0 ? (
        <h3>Esperamos tus comentarios!</h3>
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
