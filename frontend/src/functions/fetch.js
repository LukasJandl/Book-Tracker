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
    const axiosConfig = getAxiosConfig("/api/search/books/title/" + title, "GET", "", {});
    return fetchData(axiosConfig);
}

export function getBooksByAuthor(author) {
    const axiosConfig = getAxiosConfig("/api/search/books/author/" + author, "GET", "", {});
    return fetchData(axiosConfig);
}

export function getBooksByTitleAndAuthor(title, author) {
    const axiosConfig = getAxiosConfig("/api/search/books/title/" + title + "/author/" + author, "GET", "", {});
    return fetchData(axiosConfig);
}

export function getAllBooks() {
    const username = localStorage.getItem("user");
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/bookshelf/all/" + username, "GET", token, {});
    return fetchData(axiosConfig);
}

export function saveNewBook(book) {
    const username = localStorage.getItem("user");
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/bookshelf/" + username, "POST", token, book);
    return fetchData(axiosConfig);
}

export function updateBook(book) {
    const username = localStorage.getItem("user");
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/bookshelf/" + username, "PUT", token, book);
    return fetchData(axiosConfig);
}

export function deleteBook(book) {
    const username = localStorage.getItem("user");
    const token = "Bearer " + localStorage.getItem("bearerToken");
    const axiosConfig = getAxiosConfig("/api/bookshelf/" + username, "DELETE", token, book);
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
