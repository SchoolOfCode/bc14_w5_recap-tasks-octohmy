function CommentList(props) {

  const { comment } = props;

  
  const all_comments_array = comment.map((comment) => (
      <div id = {comment.id} >
        <h3>{comment.author}</h3>
        <p>{comment.content}</p>
      </div>
  ))

  return (
    <div>{all_comments_array}</div>
  );
}

export default CommentList;
