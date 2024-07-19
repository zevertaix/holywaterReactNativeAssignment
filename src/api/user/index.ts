import { USER_PROFILE_MOCK } from "../../mock/user";
import { User } from "./types";

export const fetchProfile = (): User => {
  return USER_PROFILE_MOCK;
};
