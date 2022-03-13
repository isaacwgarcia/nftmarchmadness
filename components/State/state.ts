import { Session } from "../lib/types";

export interface AppOwnerState {
  session: Session;
}

export const initialAppOwnerState: AppOwnerState = {
  session: {
    id: "",
    userTable: "",
    address: "",
  },
};
