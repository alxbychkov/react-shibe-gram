const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('favorites');
        return stateStr ? JSON.parse(stateStr) : [];
    } catch(e) {
        console.error(e);
        return [];
    }
}

export const saveToLocalStorage = (favorites) => {
    try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch(e) {
        console.error(e);
    }
}

export const initialState = {
    pictures: [''],
    favorites: loadFromLocalStorage()
}