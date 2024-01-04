import axios from "./api.js";

export default {
    async getRecords() {
        return new Promise((resolve, reject) => {
            axios
                .get("/todos?userId=1")
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    async createRecord(record) {
        return new Promise((resolve, reject) => {
            axios
                .post(`/todos`, record)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    async updateRecord(record) {
        return new Promise((resolve, reject) => {
            axios
                .put(`/todos/${record.id}`, record)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    async deleteRecord(recordId) {
        return new Promise((resolve, reject) => {
            axios
                .delete(`/todos/${recordId}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}