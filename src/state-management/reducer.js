// reducer.js
import { SET_PROFILE_DETAIL, UPDATE_PROFILE_DETAIL } from './actiontype';

const initialState = {
  profileDetail: {
    name: "",
    position: "",
    country: "",
    place: "",
    email: "",
    phone: "",
    lastUpdatedBy: "",
    lastUpdatedDate: "",
    currentOrganization: "",
    skills: "",
    employmentStatus: "",
    availableFrom: "",
    dateOfBirth: "",
    currentSalary: "",
    relevantExperience: "",
    noticePeriod: "",
    salaryExpectation: "",
    fullAddress: "",
    status: "",
    salaryType: "",
    totalExperience: "",
    languageSkills: "",
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DETAIL:
      return {
        ...state,
        profileDetail: action.payload
      };
    case UPDATE_PROFILE_DETAIL:
      return {
        ...state,
        profileDetail: {
          ...state.profileDetail,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default profileReducer;
