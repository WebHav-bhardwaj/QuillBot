import React from "react";
import MainNav from "./Shared/Components/Navbar/MainNav";
import SearchPage from "./Products/Search/Pages/SearchPage";

function App() {
  return (
    <React.Fragment>
      <MainNav />
      <div className="">
        <SearchPage />
      </div>
    </React.Fragment>
  );
}

export default App;
