import { API_BASE_URL, API_KEY, ASC } from "./../utils/constant";
export const APIService = (url, options = {}) => {
  const headers = {
    "X-Api-Key": API_KEY,
  };
  return fetch(`${API_BASE_URL}/${url}`, {
    ...options,
    headers: { ...headers, ...options.headers },
  }).then((res) => res.json());
};
