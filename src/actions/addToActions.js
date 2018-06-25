export function addToFav (id) {
    return {
        type: "ADD_FAV",
        payload: id
    };
}
export function addToCon (id) {
    return {
        type: "ADD_CON",
        payload: id
    };
}