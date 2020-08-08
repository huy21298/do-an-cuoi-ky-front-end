export const GET_LOADING_HEADER = "GET_LOADING_HEADER";
export const SET_LOADING_HEADER = "SET_LOADING_HEADER";

export const actGetLoadingHeader = () => ({ type: GET_LOADING_HEADER });

export const actSetLoadingHeader = (loading) => ({
  type: SET_LOADING_HEADER,
  loading,
});
