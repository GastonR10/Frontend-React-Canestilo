import API_CONFIG from "../configs/api";

async function fetchCommentsList() {
  const commentsList = await fetch(`${API_CONFIG.apiUrl}/comments`);
  const commentsListJSON = await commentsList.json();
  return commentsListJSON;
}
export default {
    fetchCommentsList,
};