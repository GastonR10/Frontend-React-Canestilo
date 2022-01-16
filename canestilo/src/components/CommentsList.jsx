// import { useState } from "react";
// import Comments from "./Comments";

// const ComentsList = () => {
//     const initialComments = [
//         {id: 1, content: 'bla'},

//     ];

//     const [comments, setComments] = useState(initialComments);

//     const [newValue, setNewValue] = useState({
//         id: '',
//         content: '',
//     });

//     const [errors, setErrors] = useState({
//         id: '',
//         content: '',
//     });

//     const writeComment = (e) => {
//         setNewValue({ ...newValue, 'comment': e.target.value });
//         setErrors({ ...errors, 'id': false})
//     }

//     const addComment = () => {
//         if (!newValue) {
//             setErrors({ comment: true})
//             return;
//         }
//         const newComment = { id: Math.random(), content: newValue };
//         const newComments = [...comments, newComment];
//         setComments(newComments);
//         setNewValue('');
//     };

//     return (
//         <div className="commentsList">
//             {comments.map(comment => <Comments {...comment} key={comment.id} />)}
//             <input onChange={writeComment} placeholder="comment" name="comment" />
//             <button onClick={addComment} className="addComment">Add Comment</button>
//         </div>
//     )
// };

// export default ComentsList;