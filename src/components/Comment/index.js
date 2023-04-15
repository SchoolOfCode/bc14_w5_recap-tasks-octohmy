

function Comment(props){
  const { author, content } = props;
  
  let initials = author.split(' ').map((name) => name[0]).join(''); // could be 5 letter long

  let initials2 = ""

  if (initials.length > 3) {
    // initials = initials.slice(0,2) + initials.slice(-1);
    initials2 = initials[0] + initials[1] + initials[initials.length-1];
  }

  return (
    <container>
      <div id = "inline_name">
      <h3 id="initials">{initials2}</h3>
      <h3>{author}</h3>
      </div>
      <p>{content}</p>
    </container>
  );
}

export default Comment;
