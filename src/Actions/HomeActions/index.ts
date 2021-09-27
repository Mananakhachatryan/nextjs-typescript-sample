import { ActionConsts } from "@Definitions";

import { Dispatch } from "redux";

import { IHomePage } from "@Interfaces";

import { Http } from "@Services";

export const HomeActions = {
  getMovies: (page: number) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ActionConsts.Home.GetMovies.pending, payload: {} });

      const result = (await Http.get(
        `${process.env.NEXT_PUBLIC_MOVIE_DB_URL}/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&page=${page}`
      )) as IHomePage.MoviesProps;

      dispatch({
        type: ActionConsts.Home.GetMovies.success,
        payload: result.data,
      });
    } catch (err) {
      dispatch({ type: ActionConsts.Home.GetMovies.failure, payload: {} });
    }
  },
  sortMovies: (dir: string) => (dispatch: Dispatch) => {
    dispatch({
      type: ActionConsts.Home.SortMovies.success,
      payload: { dir },
    });
  },
};
