import axios from "axios";

// mock data using JSON server
//API calling right side cards detail
export const getCardDetails = async () => {
    try {
      const result = await axios.get(`src/api/db.json`);
      return {
        status: result.status,
        body: result.data,
      };
    } catch (err: any) {
      const body = err?.response?.data
        ? err?.response?.data
        : "Failed to connect";
      return {
        status: body.status ? body.status : 500,
        body,
      };
    }
};

//API calling candidate detail
export const getCandidateDetails = async () => {
    try {
      const result = await axios.get(`src/api/candidateList.json`);
      return {
        status: result.status,
        body: result.data,
      };
    } catch (err: any) {
      const body = err?.response?.data
        ? err?.response?.data
        : "Failed to connect";
      return {
        status: body.status ? body.status : 500,
        body,
      };
    }
};