import axios from "axios";
import API_URL from "../common/axios"

class ChatsService {
    getChats() {
        const header = JSON.parse(localStorage.getItem("user"));
        return axios
            .get(API_URL + "Room", { headers: { "Authorization": `Bearer ${header.token}` } })
            .then((response) => {
                return response.data;
            });
    }
    getMessagesFromChat(id) {
        const header = JSON.parse(localStorage.getItem("user"));
        return axios
            .get(API_URL + `Messages/${id}`, { headers: { "Authorization": `Bearer ${header.token}` } })
            .then((response) => {
                return response.data
            })
    }
    sendMessageAndCheck(obj) {
        const header = JSON.parse(localStorage.getItem("user"));
        const body = { content: obj.content, userToId: obj.id }
        return axios
            .post(API_URL + "Messages/check", body, { headers: { "Authorization": `Bearer ${header.token}` } })
            .then((response) => {
                return response.data
            })
    }
    sendMessage(obj) {
        const header = JSON.parse(localStorage.getItem("user"));
        const body = { Content: obj.content, RoomToId: obj.id }
        return axios
            .post(API_URL + "Messages", body, { headers: { "Authorization": `Bearer ${header.token}` } })
            .then((response) => {
                return response.data
            })
    }
}

export default new ChatsService();
