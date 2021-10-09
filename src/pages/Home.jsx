import Card from "../components/Card";
import Loader from "../components/Loader";
import React from "react";
import sad from "../assets/img/sad.gif";

function Home({pictures, addToFavorites, favorites, loading, deletePicture}) {
    return (
        <div className="content">
            {
                pictures.length 
                    ?   <>
                            <div className="content__head">
                                <h2 className="content__title">Все фотографии</h2>
                            </div>
                            <div className="pictures__wrapper">
                                {
                                    loading ? [...Array(10)].map((i,j) => <Loader key={j}/>) :
                                    pictures.map((obj, index) => (
                                        <Card
                                            key={index}
                                            image={obj}
                                            inFavorite={favorites.find(item => item === obj) ? true : false}
                                            onFavorite={product => addToFavorites(product)}
                                            onDelete={product => deletePicture(product)}
                                        />
                                    ))
                                }
                            </div>   
                        </>
                    :   <div className="pictures__empty">
                            <h2 className="content__title">Ooops..</h2>
                            <div className="gif">
                                <img src={sad} alt="" />
                            </div>
                        </div>
            }
        </div>
    )
}

export default Home;