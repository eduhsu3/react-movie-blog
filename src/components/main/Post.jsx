function Post({ movies }) {
  return (
    <li>
      <div className="post">
        <div className="img-wrap">
          <img src={movies.poster_url} alt={movies.title} />
        </div>
        <div className="movie-info">
          <p className="title">{movies.title}</p>
          <p className="tagline">{movies.overview}</p>
          <p className="date">{movies.release_date}</p>
          <p className="rating">{movies.rating}</p>
        </div>
      </div>
    </li>
  );
}

export default Post;
