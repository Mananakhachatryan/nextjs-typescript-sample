import { ActionConsts } from "@Definitions";
import orderBy from "lodash/orderBy";

import { IAction, IHomePage } from "@Interfaces";

const INITIAL_STATE: IHomePage.IStateProps = {
  pending: false,
  data: { results: [], page: 0, total_pages: 1 },
  success: false,
  error: false,
};

type IMapPayload = IHomePage.Actions.IMapPayload;

export const HomeReducer = (
  state = INITIAL_STATE,
  action: IAction<IMapPayload>
) => {
  switch (action.type) {
    case ActionConsts.Home.GetMovies.pending:
      return {
        ...state,
        pending: true,
      };

    case ActionConsts.Home.GetMovies.success:
      return {
        ...state,
        pending: false,
        success: true,
        data: action.payload,
      };

    case ActionConsts.Home.GetMovies.failure:
      return {
        ...state,
        pending: false,
        success: false,
        error: true,
        data: action.payload,
      };

    case ActionConsts.Home.SortMovies.success:
      const sortData = action.payload?.dir
        ? orderBy(state.data.results, ["title"], [action.payload.dir])
        : state.data.results;

      return {
        ...state,
        data: {
          ...state.data,
          results: sortData,
        },
      };
    default:
      return state;
  }
};
