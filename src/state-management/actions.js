import { SET_PROFILE_DETAIL, UPDATE_PROFILE_DETAIL } from './actiontype';

export const setProfileDetail = (candidateDetails) => ({
  type: SET_PROFILE_DETAIL,
  payload: candidateDetails
});

export const updateProfileDetail = (updatedFields) => ({
  type: UPDATE_PROFILE_DETAIL,
  payload: updatedFields
});