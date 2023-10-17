import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Citation from "./Citation";
import "./SearchItems.css";

// paperId={data.paperId}
//           url={data.url}
//           title={data.title}
//           abstract={data.abstract}
//           citationCount={data.citationCount}
//           isOpenAccess={data.isOpenAccess}
//           openAccessPdf={data.openAccessPdf}
//           citationStyles={data.citationStyles}
//           authors={data.authors}

export default function SearchedItem(props) {
  let domain = new URL(props.url);
  domain = domain.hostname.replace("www.", "");

  return (
    <li className="w-full flex justify-center py-1">
      <div className="w-11/12 flex flex-col p-3 rounded-lg shadow-md lg:w-9/12">
        <div className="py-1 w-full flex justify-between items-center">
          <div className="flex">
            <h1 className=" text-gray-500 pr-1">{domain}</h1>{" "}
            <span>&#8226;</span>
            <a
              className="text-gray-500 pl-1 text-sm flex justify-center  items-center"
              href={props.openAccessPdf?.url}
            >
              PDF
            </a>
          </div>
          <div className="">
            <Button
              sx={{
                borderRadius: 28,
                textTransform: "capitalize",
                fontSize: 11,
                height: "100%",
              }}
              variant="text"
              color="success"
              startIcon={<BookmarkBorderIcon fontSize="small" />}
            >
              Bookmark
            </Button>
            <MoreVertIcon fontSize="small" color="success" />
          </div>
        </div>
        <div className="w-full flex justify-start">{props.title}</div>
        <div className="py-2 flex searchitem-author">
          <h1 className="text-gray-500">By :</h1>
          {props.authors.map((item) => {
            return (
              <div className="flex">
                <h1 className="px-1 text-gray-500">{item.name}</h1>
              </div>
            );
          })}
        </div>
        <div className="text-gray-500 py-1 searchitem-abstract">
          {props.abstract}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex justify-start items-center">
            <h1 className=" text-sm px-1 text-blue-600">
              Cited by {props.citationCount}
            </h1>
          </div>
          <div className="flex justify-end">
            <Citation citationStyles={props.citationStyles}/>
            <Button
              sx={{
                borderRadius: 28,
                textTransform: "capitalize",
                fontSize: 13,
                height: "100%",
              }}
              variant="contained"
              color="success"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
