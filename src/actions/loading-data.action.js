export const GET_LOADING_DATA = "GET_LOADING_DATA";
export const SET_LOADING_DATA = "SET_LOADING_DATA";

export const actGetLoadingData = () => ({ type: GET_LOADING_DATA });

export const actSetLoadingData = (loading) => ({
  type: SET_LOADING_DATA,
  loading,
});
