import axios from "axios";
import API_URL from "../common/axios"

class PostsService {
  getItems() {
    return axios
      .get(API_URL + "Post")
      .then((response) => {
        return response.data;
      });
  }

  getMyItems() {
    const header = JSON.parse(localStorage.getItem("user"));
    return axios
      .get(API_URL + "Post/myposts", { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }

  postCreate(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = { title: obj.title, content: obj.content }
    return axios
      .post(API_URL + "Post", body, { headers: { "Authorization": `Bearer ${header.token}` } })
  }

  postEdit(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = { id: obj.id, title: obj.title, content: obj.content }
    return axios
      .put(API_URL + "Post", body, { headers: { "Authorization": `Bearer ${header.token}` } })
  }

  postEditFile(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = { elementId: obj.id, uploadedFile: obj.formData, storageNumber: 2 }
    return axios
      .post(API_URL + "File", body, { headers: { "Authorization": `Bearer ${header.token}`, 'content-type': 'multipart/form-data' } })
  }

  postDelete(id) {
    const header = JSON.parse(localStorage.getItem("user"));
    return axios
      .delete(API_URL + `Post/${id}`, { headers: { "Authorization": `Bearer ${header.token}` } })
  }

  iLikeIt(obj) {
    const header = JSON.parse(localStorage.getItem("user"));
    const body = { postId: obj.id }
    return axios
      .post(API_URL + "Like", body, { headers: { "Authorization": `Bearer ${header.token}` } })
      .then((response) => {
        return response.data;
      });
  }
}

export default new PostsService();
