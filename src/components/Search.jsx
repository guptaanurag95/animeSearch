import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import { searchAnime } from "../productActions";

function Search({ dispatch }) {
  let searchTerm = "";
  let handleSearchTerm = (e) => {
    searchTerm = e.target.value;
  };
  let handleSearch = (e) => {
    if (e.which === 13) {
      dispatch(searchAnime(searchTerm));
    } else if (e.which === undefined) {
      dispatch(searchAnime(searchTerm));
    }
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "lightBlue",
        zIndex: 2,
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <FormControl
        style={{
          left: "50%",
          transform: "translate(-50%,0)",
          margin: 10,
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="standard-adornment-search">
          Search Anime
        </InputLabel>
        <OutlinedInput
          id="standard-adornment-search"
          type="text"
          onKeyPress={handleSearch}
          onChange={handleSearchTerm}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="search" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={100}
        />
      </FormControl>
    </div>
  );
}

export default connect()(Search);
