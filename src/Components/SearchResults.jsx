import "./SearchResults.css";

function SearchResults({ result }) {
  return (
    <div
      className='search-result'
      onClick={(e) => alert(`You click on ${result.name}`)}
    >
      {result.name}
    </div>
  );
}

export default SearchResults;
