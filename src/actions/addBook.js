export const ADD_BOOK = "ADD_BOOK"

export const addBook = (newBook) => {
    return {
        type: ADD_BOOK,
        payload: newBook
    }

}