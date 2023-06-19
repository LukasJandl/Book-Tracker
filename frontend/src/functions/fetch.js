import axios from "axios";

const url = "http://localhost:8080";
const axiosInstance = axios.create();

function getAxiosConfig(subDomain, requestMethod, requestBody) {
    const config = {
        method: requestMethod,
        url: url + subDomain,
        data: requestBody,
    };
    return config;
}

async function fetchData(axiosConfig) {
    return axiosInstance(axiosConfig)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log("Error: " + error);
            return error.response;
        });
}

export function getBooks(title) {
    const axiosConfig = getAxiosConfig("/api/search/books/" + title, "GET", {});
    return fetchData(axiosConfig);
}

export function saveNewBook(book) {
    const axiosConfig = getAxiosConfig("/api/bookshelf", "POST", book);
    console.log(axiosConfig.data);
    return fetchData(axiosConfig);
}
