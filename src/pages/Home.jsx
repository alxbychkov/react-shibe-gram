import Card from "../components/Card";
import Loader from "../components/Loader";
import React from "react";
import sad from "../assets/img/sad.gif";
import empty from "../assets/img/empty.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deletePicture, loadData, setFavorite } from "../redux/actions";
import axios from "axios";

function Home({filtered}) {
    const [isLoading, setLoading] = React.useState(true);
    const dispatch = useDispatch();
    const state = useSelector(state => state.pictures);

    React.useEffect(() => {
        async function loadPictures() {
            try {
                const itemsData = await axios.get('https://cors-anywhere.herokuapp.com/https://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true');
    
                setLoading(false);
                dispatch(loadData(itemsData.data));
            } catch(e) {
                console.error(e);
            }
        }
    
        loadPictures();
      }, [dispatch]);
    
    const addToFavorites = (picture) => {
        dispatch(setFavorite(picture));
    }

    const deletePictures = (picture) => {
        if (state.favorites.indexOf(picture) !== -1) addToFavorites(picture);
        dispatch(deletePicture(picture));
    }

    return (
        <div className="content">
            {
                state[`${filtered ? 'favorites' : 'pictures'}`].length 
                    ?   <>
                            <div className="content__head">
                                <h2 className="content__title">
                                    {
                                        filtered ? 'Избранное' : 'Все фотографии'
                                    }
                                </h2>
                            </div>
                            <div className="pictures__wrapper">
                                {
                                    isLoading ? [...Array(20)].map((i,j) => <Loader key={j}/>) :
                                        state[`${filtered ? 'favorites' : 'pictures'}`].map((image, index) => (
                                            <Card
                                                key={index+image}
                                                image={image}
                                                inFavorite={state.favorites.find(item => item === image) ? true : false}
                                                onFavorite={picture => addToFavorites(picture)}
                                                onDelete={picture => deletePictures(picture)}
                                                filtered={filtered}
                                            />
                                        ))
                                }
                            </div>   
                        </>
                    :   <div className="pictures__empty">
                            <h2 className="content__title">
                                {
                                    filtered ? 'В избранном ничего нет..' : 'Ooops..'
                                }
                            </h2>
                            <div className="gif">
                                <img src={filtered ? empty : sad} alt="no_data" />
                            </div>
                        </div>
            }
        </div>
    )
}

export default Home;