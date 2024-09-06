import Post from './Post';

function Main({ movies }) {
  return (
    <main className="main">
      <ul className="blog-list">
        {movies.map((item, idx) => (
          <Post key={idx} movies={item} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
