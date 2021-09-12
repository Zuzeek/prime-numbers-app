import http from "./http-common";

class NumberDataService {
    getAll() {
        return http.get("/numbers"); 
    }

    getPrimeNumbers(data) {
        return http.get("/primeNumbers", data); 
    }

    create(data) {
        return http.post("/add", data); 
    }

    deleteAll() {
        return http.delete("/delete");
      }
}

export default new NumberDataService(); 