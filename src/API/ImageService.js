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
    
    static async create(data) {
        const formData = new FormData();
        Object.keys(data).forEach(key => formData.append(key, data[key] ?? ""));
        try {
            return (await axios.post("/images", formData, {headers: { "Content-Type": "multipart/form-data" }})).data;
        } catch {
            return null;
        }
    }
}