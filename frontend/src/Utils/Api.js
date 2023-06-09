import axios from "axios";
export const LocalUrl = "http://localhost:5000/api";
export const OnllineUrl = "http://localhost:5000/api";

export const ProductionUrl = LocalUrl;

// post Api json
export const PostApiJson = async (Url, Data) => {
  return await axios.post(`${ProductionUrl}/${Url}`, Data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

// post Api FormData
export const PostApiFormData = async (Url, Data) => {
  return await axios.post(`${ProductionUrl}/${Url}`, Data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
};

// Get Api
export const GetApi = async (Url) => {
  return await axios.get(`${ProductionUrl}/${Url}`, {
    headers: {
      Accept: "application/json",
    },
  });
};
