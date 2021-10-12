import axios from "axios";

const apiURL = process.env.REACT_APP_REQRES_API;

function getUsers() {
  const response = axios.get(`${apiURL}/users`);
  console.log(response);
  return response;
}


function getCreatedUser(user) {
  const response = axios.post(`${apiURL}/users`, {
  
    name: user.name,
    email: user.email,
    gender: user.gender,
    surveys: null,
    dateOfBirth: new Date(user.dateOfBirth).toISOString(),
  });
  
  return response;
}

function getUpdatedUser(id, user) {
  const response = axios.put(`${apiURL}/users/${id}`, {

    id: id,
    email: user.email,
    name: user.name,
    gender: user.gender,
    surveys: user.surveys,
    dateOfBirth: new Date(user.dateOfBirth).toISOString(),
  });

  return response;
}

function getDeletedUser(id) {
  const response = axios.delete(`${apiURL}/users/${id}`);

  return response;
}

export { getUsers, getCreatedUser, getUpdatedUser, getDeletedUser };
