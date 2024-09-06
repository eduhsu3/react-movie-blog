function MainCreate({ setMovies, setIsCreate }) {
  function submitHandle() {
    setMovies((prev) => [
      ...prev,
      {
        id: 100,
        title: '강제로 넣는 값',
        release_date: '강제로 넣는 값',
        overview: '강제로 넣는 값',
        poster_url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/w5mXdM9AIf7urUtoUVYjABdp3g8.jpg',
        rating: '강제로 넣는 값',
      },
    ]);
  }
  function cancelHandle() {
    const inputs = document.querySelectorAll('input');
    const text = document.querySelector('textarea');
    inputs.forEach((item) => {
      item.value = '';
    });
    text.value = '';
    setIsCreate(false);
  }
  return (
    <main className="main">
      <div className="blog-write">
        <div className="row">
          <label htmlFor="">영화 제목</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="">영화 간략소개</label>
          <textarea rows="5"></textarea>
        </div>
        <div className="row">
          <label htmlFor="">영화 포스터 URL</label>
          <input type="text" placeholder="웹에서 이미지 경로 복사, 붙여넣기" />
        </div>
        <div className="row">
          <label htmlFor="">영화 평점</label>
          <input type="text" />
        </div>
        <div className="bottom-btn">
          <button className="submit" onClick={submitHandle}>
            등록
          </button>
          <button onClick={cancelHandle}>취소</button>
        </div>
      </div>
    </main>
  );
}

export default MainCreate;
