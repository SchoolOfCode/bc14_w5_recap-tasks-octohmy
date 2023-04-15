

function BlogPost(props) {
  const { title, author, datePosted, content, imageSrc, imageAlt } = props;

  
  return (
    <article>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{datePosted}</p>
      <p>{content}</p>
      <img src={imageSrc} alt={imageAlt} />
    </article>

  )
}

export default BlogPost;
