import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  SEARCH_TERM_ENTERED,
  FETCH_ADDITIONAL_DATA,
} from "./ActionCodes";

const initialState = {
  searchTerm: "",
  data: [],
  currentPageNumber: 1,
  lastPageNumber: 1,
  isLoading: true,
  isError: false,
  isLoadingAdditionalData: false,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TERM_ENTERED:
      return {
        ...state,
        searchTerm: action.term,
        isError: false,
        isLoading: true,
        isLoadingAdditionalData: false,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data,
        lastPageNumber: action.lastPage,
        isLoadingAdditionalData: false,
        currentPageNumber: action.currentPageNumber,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        isLoadingAdditionalData: false,
      };
    case FETCH_ADDITIONAL_DATA:
      return { ...state, isLoadingAdditionalData: true };
    default:
      return state;
  }
}

export default productReducer;
