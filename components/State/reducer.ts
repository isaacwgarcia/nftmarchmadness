import { AppOwnerState } from "./state";
import { ActionType, AppActions, LoadSession } from "./actions";
import { Session } from "../lib/types";

export function appReducer(
  state: AppOwnerState,
  action: AppActions
): AppOwnerState {
  switch (action.type) {
    case ActionType.LoadSession:
      state.session = action.payload;
      return { ...state };

    default:
      return state;
  }
}

export const loadSession = (session: Session): LoadSession => ({
  type: ActionType.LoadSession,
  payload: session,
});
