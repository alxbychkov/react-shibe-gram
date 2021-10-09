const loadFavorites = () => {
    return localStorage.getItem('favorites') ? localStorage.getItem('favorites') : [];
}

export const initialState = {
    pictures: [],
    favorites: loadFavorites()
}