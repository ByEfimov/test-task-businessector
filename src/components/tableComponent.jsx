function TableComp(props) {
  const { PostsData, showPage, filter, setLastsort, lastsort } = props;

  const filtredPosts = PostsData[0]
    ? PostsData.filter((post) => {
        return (
          post.title.toLowerCase().includes(filter.toLowerCase()),
          post.body.toLowerCase().includes(filter.toLowerCase())
        );
      })
    : "";

  const showPosts = filtredPosts.slice(showPage - 10, showPage);

  function sortPostsHandler(e) {
    if (e.target.textContent == "ID") {
      if (e.target.classList.contains("open")) {
        showPosts.sort((a, b) => a.id - b.id);
        e.target.classList.toggle("open");
        setLastsort(showPosts);
      } else {
        showPosts.sort((a, b) => b.id - a.id);
        e.target.classList.toggle("open");
        setLastsort(showPosts);
      }
    } else if (e.target.textContent == "Заголовок") {
      if (e.target.classList.contains("open")) {
        showPosts.sort((a, b) =>
          b.title.slice(-1).localeCompare(a.title.slice(-1))
        );
        setLastsort(showPosts);
        e.target.classList.toggle("open");
      } else {
        showPosts.sort((a, b) => a.title.localeCompare(b.title));
        e.target.classList.toggle("open");
        setLastsort(showPosts);
      }
    } else if (e.target.textContent == "Описание") {
      if (e.target.classList.contains("open")) {
        showPosts.sort((a, b) =>
          b.body.slice(-1).localeCompare(a.body.slice(-1))
        );
        e.target.classList.toggle("open");
        setLastsort(showPosts);
      } else {
        showPosts.sort((a, b) => a.body.localeCompare(b.body));
        e.target.classList.toggle("open");
        setLastsort(showPosts);
      }
    }
  }

  return (
    <div className="table">
      <header className="tableHeader" onClick={sortPostsHandler}>
        <button className="sortID">ID</button>
        <button className="sortTitle">Заголовок</button>
        <button className="sortDesc">Описание</button>
      </header>
      <div className="tableBody">
        {lastsort[0]
          ? lastsort.map((post) => {
              return (
                <div key={post.id} className="table-item">
                  <div className="itemId">{post.id}</div>
                  <div className="itemTitle">{post.title}</div>
                  <div className="itemDesc">{post.body}</div>
                </div>
              );
            })
          : showPosts[0]
          ? showPosts.map((post) => {
              return (
                <div key={post.id} className="table-item">
                  <div className="itemId">{post.id}</div>
                  <div className="itemTitle">{post.title}</div>
                  <div className="itemDesc">{post.body}</div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
export default TableComp;
