import React, { useEffect, useState } from "react";

export default function SearchWrapper(props) {
  const [styles, setStyles] = useState(
    "h-screen w-full flex justify-center items-center "
  );
  useEffect(() => {
    if (props.searchedOnce === false) {
      setStyles("h-screen w-full flex justify-center items-center");
    } else {
      setStyles("pt-12 w-full flex justify-center items-center");
    }
  }, [props.searchedOnce]);

  return (
    <div className={`${styles}`}>
      {props.children}
    </div>
  );
}
