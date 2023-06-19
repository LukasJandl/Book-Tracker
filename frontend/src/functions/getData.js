export const getImageLink = (book) => {
    const NO_IMAGE_URL = "/image_not_available.jpg";
    if (book.volumeInfo.imageLinks == null) {
        return NO_IMAGE_URL;
    } else {
        return book.volumeInfo.imageLinks.thumbnail;
    }
};

export const getAuthors = (book) => {
    const authors = book.volumeInfo.authors;
    return authors == null ? null : authors.join(", ");
};

export const getCategories = (book) => {
    const categories = book.volumeInfo.categories;
    return categories == null ? null : categories.join(", ");
};

export const getPartialDescription = (book) => {
    const description = book.volumeInfo.description;
    return description == null ? null : description.substr(0, 300) + "...";
};
