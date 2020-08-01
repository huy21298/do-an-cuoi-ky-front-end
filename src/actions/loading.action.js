import AxiosService from "../services/axios.service";

export const GET_LOADING = "GET_LOADING";
export const SET_LOADING = "SET_LOADING";

export const actGetLoading = () => ({ type: GET_LOADING });

export const actSetLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});
