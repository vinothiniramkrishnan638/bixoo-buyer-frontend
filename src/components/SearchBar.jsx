import searchIcon from "../assets/search.png";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-input-wrap">
      <img src={searchIcon} alt="" className="search-icon-img" />
      <input
        type="text"
        className="search-input"
        placeholder="Search products, supp..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
      />
    </div>
  );
}

export default SearchBar;