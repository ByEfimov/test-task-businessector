function ButtonsComp(props) {
  const { setShowPage, showPage, PostsData, setLastsort } = props;
  function clickPrev() {
    setLastsort("");
    if (showPage !== 10) {
      setShowPage(showPage - 10);
    }
  }
  function clickNext() {
    setLastsort("");
    if (showPage !== PostsData.length) {
      setShowPage(showPage + 10);
    }
  }

  function HandlerClickPages(e) {
    setLastsort("");
    if (e.target.textContent <= PostsData.length / 10) {
      setShowPage(e.target.textContent * 10);
    }
  }

  return (
    <div className="buttons">
      <button className="buttonPrev buttonSelect" onClick={clickPrev}>
        Назад
      </button>
      <div className="buttonPages" onClick={HandlerClickPages}>
        {PostsData[0]
          ? PostsData.map((page) => {
              if (page.id % 10 === 0) {
                if (page.id == showPage) {
                  return (
                    <span className="page SelectPage" key={page.id}>
                      {page.id / 10}
                    </span>
                  );
                } else {
                  return (
                    <span className="page " key={page.id}>
                      {page.id / 10}
                    </span>
                  );
                }
              }
            })
          : ""}
      </div>
      <button className="buttonNext buttonSelect" onClick={clickNext}>
        Далее
      </button>
    </div>
  );
}
export default ButtonsComp;
