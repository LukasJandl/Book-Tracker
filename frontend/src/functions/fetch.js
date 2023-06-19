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

export function getBooksByTitle(title) {
    const axiosConfig = getAxiosConfig("/api/search/books/title/" + title, "GET", {});
    return fetchData(axiosConfig);
}

export function getBooksByAuthor(author) {
    const axiosConfig = getAxiosConfig("/api/search/books/author/" + author, "GET", {});
    return fetchData(axiosConfig);
}

export function getBooksByTitleAndAuthor(title, author) {
    const axiosConfig = getAxiosConfig("/api/search/books/title/" + title + "/author/" + author, "GET", {});
    return fetchData(axiosConfig);
}

export function saveNewBook(book) {
    const axiosConfig = getAxiosConfig("/api/bookshelf", "POST", book);
    return fetchData(axiosConfig);
}
