import axios from "./axios-wrapper";

export default class ImageService {
    static async getAll() {
        try {
            return (await axios.get("/images")).data;
        } catch {
            return [];
        }
    }

    static async get(id) {
        try {
            return (await axios.get(`/images/${id}`)).data;
        } catch {
            return [];
        }
    }
}