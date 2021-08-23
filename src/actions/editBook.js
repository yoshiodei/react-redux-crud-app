export const EDIT_BOOK = "EDIT_BOOK";

export const editBook = (editedBook,bookId) => {
    return {
        type: EDIT_BOOK,
        payload: editedBook,
        id: bookId
    }
}