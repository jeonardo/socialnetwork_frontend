import axios from "axios";
import API_URL from "../common/axios"
class CommentsService {
    CreateComment(obj) {
        const header = JSON.parse(localStorage.getItem("user"));
        const body = { commentText: obj.justComment.value , postId: obj.id }
        return axios
            .post(API_URL + "Comment", body, { headers: { "Authorization": `Bearer ${header.token}` } })
            .then((response) => {
                return response.data;
            });
    }
}
export default new CommentsService();