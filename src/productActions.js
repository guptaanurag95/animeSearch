import {
  SEARCH_TERM_ENTERED,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  FETCH_ADDITIONAL_DATA,
} from "./ActionCodes";

export function searchAnime(searchTerm) {
  return (dispatch, getState) => {
    let state = getState();
    if (state.searchTerm === searchTerm) return;
    dispatch({ type: SEARCH_TERM_ENTERED, term: searchTerm });

    fetch("https://api.jikan.moe/v3/search/anime?q=" + searchTerm + "&limit=16")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          data: data.results,
          lastPage: data.last_page,
          currentPageNumber: 1,
        });
      })
      .catch((text) => {
        dispatch({ type: FETCH_DATA_ERROR });
      });
  };
}

export function loadNextPage() {
  return (dispatch, getState) => {
    let state = getState();
    if (state.currentPageNumber === state.lastPageNumber) return;
    dispatch({ type: FETCH_ADDITIONAL_DATA });
    fetch(
      "https://api.jikan.moe/v3/search/anime?q=" +
        state.searchTerm +
        "&limit=16&page=" +
        (state.currentPageNumber + 1)
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          data: [...state.data, ...data.results],
          lastPage: data.last_page,
          currentPageNumber: state.currentPageNumber + 1,
        });
      })
      .catch((text) => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          data: [...state.data],
          lastPage: state.lastPageNumber,
          currentPageNumber: state.currentPageNumber,
        });
      });
  };
}
