function SearchComp(props) {
  const { setFilter } = props;

  return (
    <div className="search">
      <input
        type="text"
        id="inputSerch"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        placeholder="Поиск"
        className="inputSerch"
      />
      <button className="buttonSerch" id="buttonSerch"></button>
    </div>
  );
}
export default SearchComp;
