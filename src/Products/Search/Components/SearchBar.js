import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchWrapper from "./SearchWrapper";

import axios from "axios";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const URL = "https://api.gyanibooks.com/search_publication/";

export default function SearchBar(props) {
  const [searchedOnce, setSearchedOnce] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  const searchInputhandler = (event) => {
    setSearchContent(event.target.value);
  };

  const clearHandler = (event) => {
    event.preventDefault();
    setSearchedOnce(false);
    setSearchContent("");
    props.setSearchResults("");
  };

  const searchHandler = async () => {
    if (searchContent === "") return;

    setSearchedOnce(true);

    let data = JSON.stringify({
      keyword: searchContent,
      limit: "10",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.data)
        props.setSearchResults(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SearchWrapper searchedOnce={searchedOnce}>
      <div className="w-full px-8 flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center px-2 lg:w-5/12 ">
          <div onClick={clearHandler} className="flex pl-2">
            <ArrowBackIosIcon />
            <h1>Back</h1>
          </div>
          <FormControlLabel
            control={
              <Switch color="success" defaultChecked />
            }
            label="Academic"
          />
        </div>
        <Paper
          component="form"
          sx={{
            px: 2,
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "sm",
            borderRadius: 28,
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            id="art-search-box"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onChange={searchInputhandler}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={searchHandler}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Paper>
      </div>
    </SearchWrapper>
  );
}
