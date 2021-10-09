import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [pictures, setPictures] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      const itemsData = await axios.get('/shibes?count=20&urls=true&httpsUrls=true');

      setLoading(false);

      setPictures(itemsData.data);
      setFavorites([]);
    }

    loadData();  
  }, []);

  const addToFavorites = (picture) => {
    if (favorites.find(item => item === picture)) {
      setFavorites(prev => [...prev.filter(item => item !== picture)]);
    } else {
      setFavorites(prev => [...prev, picture]);
    }
  }

  const deletePicture = (picture) => {
    console.log(picture);
    if (pictures.find(item => item === picture)) {
      setPictures(prev => [...prev.filter(item => item !== picture)]);
    }
  }

  return (
    <div className="wrapper">
      <Header></Header>
      <Home
        pictures={pictures}
        loading={isLoading}
        addToFavorites={addToFavorites}
        deletePicture={deletePicture}
        favorites={favorites}
      />
    </div>
  );
}

export default App;
