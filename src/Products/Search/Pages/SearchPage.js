import React, {useState} from "react";
import SearchBar from "../Components/SearchBar";
import SearchedContent from '../Components/SearchedContent'

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState();

  return (
    <React.Fragment>
      <SearchBar setSearchResults={setSearchResults} />
      {searchResults && <SearchedContent searchResults={searchResults}/>}
    </React.Fragment>
  );
}
