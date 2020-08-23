import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import AnimeCard from "./AnimeCard";
import Button from "@material-ui/core/Button";
import { loadNextPage } from "../productActions";
import Typography from "@material-ui/core/Typography";

function CardGrid(props) {
  let handleClick = (e) => {
    props.dispatch(loadNextPage());
  };

  let displayText = (text) => {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Typography gutterBottom variant="h5" component="h2">
          {text}
        </Typography>
      </div>
    );
  };

  return (
    <div style={{ marginTop: "90px" }}>
      {props.searchTerm === "" ? displayText("Enter a Search Term") : ""}
      {props.searchTerm !== "" && props.isLoading
        ? displayText("Data Loading....")
        : ""}
      {props.searchTerm !== "" && props.isError
        ? displayText("Error loading data....")
        : ""}
      {!props.isLoading && !props.isError && props.searchTerm !== "" ? (
        <div>
          {props.data.length === 0
            ? displayText("No results found. Search Again.")
            : ""}
          <Grid container style={{ flexGrow: 1 }} spacing={1}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={1}>
                {props.data.map((animeObject, index) => {
                  return (
                    <Grid key={index} item>
                      <AnimeCard
                        title={animeObject.title}
                        imageURL={animeObject.image_url}
                        detailsURL={animeObject.url}
                        description={animeObject.synopsis}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          {props.showMoreEnable ? (
            <Button
              color="secondary"
              onClick={handleClick}
              style={{
                margin: "10px",
                left: "50%",
                transform: "translate(-50%,0)",
              }}
            >
              Load More...
            </Button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function mapStateToProps(state) {
  const {
    isLoading,
    data,
    currentPageNumber,
    lastPageNumber,
    isError,
    searchTerm,
    isLoadingAdditionalData,
  } = state;
  let showMoreEnable = !isLoadingAdditionalData;
  if (currentPageNumber === lastPageNumber) showMoreEnable = false;
  return {
    isLoading,
    isError,
    showMoreEnable,
    data,
    searchTerm,
  };
}

export default connect(mapStateToProps)(CardGrid);
