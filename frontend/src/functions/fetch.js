import axios from "axios";

const url = "http://localhost:8080";
const axiosInstance = axios.create();

function getAxiosConfig(subDomain, requestMethod, token, requestBody) {
    const config = {
        method: requestMethod,
        url: url + subDomain,
        headers: {
            Authorization: token,
        },
        data: requestBody,
    };
    return config;
}

async function fetchData(axiosConfig, token) {
    if (token === "Bearer null") {
        return { status: -1 };
    }

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
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/search/books/title/" + title, "GET", token, {});
    return fetchData(axiosConfig);
}

export function getBooksByAuthor(author) {
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/search/books/author/" + author, token, "GET", {});
    return fetchData(axiosConfig);
}

export function getBooksByTitleAndAuthor(title, author) {
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/search/books/title/" + title + "/author/" + author, "GET", token, {});
    return fetchData(axiosConfig);
}

export function saveNewBook(book) {
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/bookshelf", "POST", token, book);
    return fetchData(axiosConfig);
}

export function getAllBooks() {
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/bookshelf/all", "GET", token, {});
    return fetchData(axiosConfig);
}

export function registerUser(userData) {
    const token = "";
    const axiosConfig = getAxiosConfig("/api/auth/register", "POST", token, userData);
    return fetchData(axiosConfig, token);
}

export function authenticateUser(encodedToken) {
    const token = "Basic " + encodedToken;
    const axiosConfig = getAxiosConfig("/api/auth/authenticate", "GET", token, {});
    return fetchData(axiosConfig, token);
}
