const baseURL = "http://localhost:3000/api/v1";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

//user login api calls
export const postNewUser = user => {
  return fetch(`${baseURL}/users`, {
    method: "POST",
    headers,
    body: JSON.stringify({ user })
  }).then(res => res.json());
};

export const postAuthSession = auth => {
  return fetch(`${baseURL}/login`, {
    method: "POST",
    headers,
    body: JSON.stringify({ auth })
  }).then(res => res.json());
};

export const getAuthSession = token => {
  return fetch(`${baseURL}/login`, { headers: { ...headers, token } }).then(
    res => res.json()
  );
};

//project api calls
export const postProject = project => {
  return fetch(`${baseURL}/projects`, {
    method: "POST",
    headers,
    body: JSON.stringify({ project })
  }).then(res => res.json());
};

export const getProject = id => {
  return fetch(`${baseURL}/projects/${id}`, {
    headers
  }).then(res => res.json());
};
