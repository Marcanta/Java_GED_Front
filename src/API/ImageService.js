import axios from "./axios-wrapper";
import { formatData } from "../utils/analyseTool";

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

    static async analyze(file) {
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);
        try {
            const response = (await axios.post("/images/analyze", formData, { headers: { "Content-Type": "multipart/form-data" } })).data;
            console.log(response);
            return formatData(response);
        } catch (e) {
            console.error(e);
            return {objects: "", persons: ""};
        }
    }
}