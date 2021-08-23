export const REMOVE_BOOK = 'REMOVE_BOOK';

export const removeBook = (bookId) => {
    return {
        type: REMOVE_BOOK ,
        payload: bookId
    }
}