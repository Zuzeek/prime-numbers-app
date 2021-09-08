import http from "../http-common";

class NumberDataService {
    getAll() {
        return http.get("/numbers"); 
    }

    getListOfPrimeNumbers(data) {
        return http.get("/number", data); 
    }

    create(data) {
        return http.post("/add", data); 
    }
}

export default new NumberDataService(); 