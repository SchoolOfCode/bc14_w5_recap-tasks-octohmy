// import useState from react

import React, { useState } from 'react';

//create inpput value with usestate
//1 for author, 1 for comment ✅


//handle input change, author and comment

// ✅
// handle onSubmit


// create function to call when onsubmit is called

// create edge cases, like empty, or too long


function CommentForm(props) {

  const { comment, buttonClick } = props;

  const [author, setAuthor] = useState('Anon');
  const [content, setContent] = useState('');

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  }

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  const handleSubmitButton = (event) => {
    event.preventDefault();
    if (author === '' || content === '') {
      alert('Please fill out all fields');
      return;
    }
    // console.log({author}, {content});
    // buttonClick([...comment, {author: {author}, content: {content}}]);
    buttonClick([...comment, {author: author, content: content}]);
    setAuthor('Anon');
    setContent('');

  }

  return (
    <form onSubmit = {handleSubmitButton}>
      <label>
        Name:<br></br>
        <input type="text" value={author} required onChange={handleAuthorChange} />
      </label>
      <label>
        <br></br>
        Comment:<br></br>
        <textarea type="text" value={content} required onChange={handleContentChange} />
      </label><br></br>
      <button type = "submit">Submit</button>
      
    </form>
  );
}

export default CommentForm;
