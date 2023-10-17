import React from "react";
import SearchedItem from "./SearchedItem";

export default function SearchedContent(props) {
  return (
    <div>
      <ul>
        {props.searchResults.map((item) => {
          return (
            <SearchedItem
              paperId={item.paperId}
              url={item.url}
              title={item.title}
              abstract={item.abstract}
              citationCount={item.citationCount}
              isOpenAccess={item.isOpenAccess}
              openAccessPdf={item.openAccessPdf}
              citationStyles={item.citationStyles}
              authors={item.authors}
            />
          );
        })}
      </ul>
    </div>
  );
}
