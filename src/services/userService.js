import axios from "axios";
import API_URL from "../common/axios"

class UsersService {

  getUsers() {
    const header = JSON.parse(localStorage.getItem("user"));
    return axios
      .get(API_URL + "User", { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  getMyUser() {
    const header = JSON.parse(localStorage.getItem("user"));
    return axios
      .get(API_URL + "User/profile", { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  getMyFriends() {
    const header = JSON.parse(localStorage.getItem("user"));
    return axios
      .get(API_URL + "Friend", { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  getMyFriendsRequests() {
    const header = JSON.parse(localStorage.getItem("user"));
    return axios
      .get(API_URL + "Friend/request", { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  addFriend(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = { friendid: obj }
    return axios
      .post(API_URL + "Friend", body, { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  addFriendAgree(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = { id: obj.userId, status: obj.status }
    return axios
      .put(API_URL + "Friend", body, { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  friendDelete(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    return axios
    .delete(API_URL + `Friend/${obj.userId}`, { headers: { "Authorization": `Bearer ${header.token}` } })
    .then((response) => {
      return response.data;
    });
  }

  excludeFromSearch() {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = {}
    return axios
      .put(API_URL + `User/execute`, body, { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  setProfileSetting(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = { email: obj.email, name: obj.name, surname: obj.surname, sex: obj.sex, birthDate: obj.birthdate }
    return axios
      .put(API_URL + `User`, body, { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  setProfilePassword(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = { oldPassword: obj.passwordOld, newPassword: obj.passwordNew }
    return axios
      .put(API_URL + `Auth/changePassword`, body, { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }
}

export default new UsersService();