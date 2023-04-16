import React from 'react';
import Comment from '../Comment';

function CommentList(props) {

  const { comment } = props;


 

  
  const all_comments_array = comment.map((comment) => (
     
     <div id = {comment.id} >
      <Comment author = {comment.author} content = {comment.content}/>
        {/* <h3>{comment.author}</h3>
        <p>{comment.content}</p> */}
      </div>

      //
  ))

  return (
    <div id = "allComments">{all_comments_array}</div>
  );
}

export default CommentList;
