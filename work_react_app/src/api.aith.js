import { instance } from "./api.config.js";

export default class AuthService {

    login (email, password) {
        return instance.post("/token/", {email, password})
    }
    
    refreshToken() {
        return instance.get("/token/refresh");
    }
    
    logout() {
        return instance.post("/api/logout")
    }
}