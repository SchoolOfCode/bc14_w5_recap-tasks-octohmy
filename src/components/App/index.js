import React from 'react';
import { useState } from 'react';
//import css from App.css
import './App.css';

import BlogPost from '../BlogPost';
import Comment from '../Comment';
import CommentList from '../CommentList';

function App() {

  const comments = [
    {
      id: "kskBC5HZ8qgNQUiW6If6q",
      author: "Billy Bootcamper",
      content: "Hello, great post",
    },
    {
      id: "jFyGAKz1VsGputO1gV8xa",
      author: "Chris Meah",
      content: "Many thank yous",
    },
  ]

  return (
    <div>
      <BlogPost
        title="My First Blog Post"
        author="chris"
        datePosted="2021-01-01"
        content="This is my first blog post!"
        imageSrc="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        imageAlt="A dog sitting on a beach"
        />
      <Comment author="Ben Lee Super Ducks" content="Hello, great post"/>
      <CommentList comment = {comments} />
        </div>
  );
}

export default App;
