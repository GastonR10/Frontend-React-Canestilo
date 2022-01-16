import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import commentsListServicio from "../api/commentsList.servicio";

const Comments = () => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(async () => {
    try {
      const commentsListFromApi =
        await commentsListServicio.fetchCommentsList();

      setCommentsList(commentsListFromApi);
    } catch (error) {}
  }, []);

  return (
    <div>
      <div id="comentarios2">
        <h2>Comentarios</h2>
        <div id="info">Agradecemos nos ayudes a mejorar día a día</div>
        <form>
          <textarea
            id="text"
            onkeypress="return limita(event, 280);"
            onkeyup="actualizaInfo(280)"
            cols="30"
            rows="6"
          ></textarea>
          <button id="submitComment" type="submit">
            Subir comentario
          </button>
        </form>
      </div>
      <CommentsList commentsList={commentsList} />
    </div>
  );
};

export default Comments;
