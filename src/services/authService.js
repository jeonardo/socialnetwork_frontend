import axios from "axios";
import API_URL from "../common/axios"

class AuthService {
  
  login(username, password) {
    return axios
      .post(API_URL + "Auth/login",
      {UserName: username, password}
      )
      .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user")
  }

  register(name, surname, email, sex, password) {
    return axios.post(API_URL + "Auth/register", {
      name,
      surname,
      email,
      sex,
      password,
    });
  }
}

export default new AuthService();
