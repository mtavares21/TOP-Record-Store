import React, { useState } from "react";
import spotifySearch from "../spotifySearch";
import Card from "./Card";
import Player from "./SpotifyPlayer";
import Cart from "./Cart";

function Search() {
  const [query, setQuery] = useState(null);
  const [data, setData] = useState([]);
  const [currAlbum, setAlbum] = useState("70QLa02zm19XEJAWUwNk4R");
  const [cart, setCart] = useState([]);
  // Search form onChange and OnSubmit
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await spotifySearch(query);
    if (searchResults) {
      setData(() => [...searchResults]);
    }
  }
  // Current album on Spotify Player
  const playAlbum = (album) => {
    const splitUri = album.split("album:");
    setAlbum(splitUri[1]);
  }
  ///////// Cart Controls ////////
  // Arrows Up
  const increment = (id) => {
    const newState = cart.map( item => {
      if(item.id === id){
        item.quantity = parseFloat(item.quantity) + 1 
      return item
      } else { return item }
    })
    setCart((prevState) => prevState = [...newState])
  }
  // Arrow Down
  const decrement = (id) => {
    const newState = cart.map( item =>{
      if(item.id === id && item.quantity > 1){ 
       item.quantity = parseFloat(item.quantity) - 1
      return item
      } else { return item } 
    })
    setCart((prevState) =>  
      prevState = [...newState])
  };
  // Cart onChange function
  const quantityChange = (e, id) => {
     const newState = cart.map( item =>{
      if(item.id === id){ 
        item.quantity = e.target.value
        return item
      } else { return item} 
    })
    setCart((prevState) => prevState = [...newState])
  };

  // Add item or increment quantity in Cart
  const addToCart = (album) => {
    const checkForItem = [...cart].filter((item) => item.id === album.id);
    if (checkForItem.length===0) {
      const albumToBuy =  Object.assign( album, {quantity: 1} )
      setCart((prevState) => [...prevState, albumToBuy])
    } else { increment(album.id)}
  };
  // Delete album from Cart
  const deleteAlbum = (albumId) => {
    // eslint-disable-next-line array-callback-return
    const newCart = [...cart].filter((album) => album.id !== albumId);
    console.log(newCart);
    setCart((prevState) => (prevState = newCart));
  };

  return (
    <div className="searchWrapper">
      <div>
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search for album/artist"
          />
          <button type="submit"> Search</button>
        </form>
        <ul className="searchResults">
          {data
            ? data.map((album) => {
                return (
                  <li>
                    <Card
                      key={album.id}
                      onClick={() => playAlbum(album.uri)}
                      artist={album.artist}
                      name={album.album}
                      price={album.price}
                      src={album.cover}
                      addToCart={() => addToCart(album)}
                    />
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <div className="leftWrap">
        <Player currAlbum={currAlbum} />
        <Cart
          cart={cart}
          cancel={(id) => deleteAlbum(id)}
          onChange={quantityChange}
          increment={ (id) => increment(id)}
          decrement={ (id) => decrement(id)}
        />
      </div>
    </div>
  );
}

export default Search;
