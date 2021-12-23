import { aSetUserDetails } from "./action"

export function setUserDetails(user) {
  return async dispatch => {
    dispatch(aSetUserDetails(user))
  }
}