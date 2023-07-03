export const getImageLink = (book) => {
    const NO_IMAGE_URL = "/image_not_available.jpg";
    if (book.imageLinks == null) {
        return NO_IMAGE_URL;
    } else {
        return book.imageLinks.thumbnail;
    }
};

export const getJoinedAuthors = (authors) => {
    return authors == null ? null : authors.join(", ");
};

export const getJoinedCategories = (categories) => {
    return categories == null ? null : categories.join(", ");
};

export const getPartialDescription = (description) => {
    return description == null ? null : description.substr(0, 300) + "...";
};
