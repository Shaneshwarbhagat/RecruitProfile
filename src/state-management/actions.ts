import { SET_PROFILE_DETAIL, UPDATE_PROFILE_DETAIL } from './actiontype';

export const setProfileDetail = (candidateDetails: any) => ({
  type: SET_PROFILE_DETAIL,
  payload: candidateDetails
});

export const updateProfileDetail = (updatedFields: any) => ({
  type: UPDATE_PROFILE_DETAIL,
  payload: updatedFields
});