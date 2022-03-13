import { Session } from "../../components/lib/types";

export enum ActionType {
  LoadSession,
}

export interface LoadSession {
  type: ActionType.LoadSession;
  payload: Session;
}

export type AppActions = LoadSession;
