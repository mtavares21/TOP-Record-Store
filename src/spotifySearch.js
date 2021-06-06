async function spotifySearch (query){
  
const hash = window.location.hash
const urlParams = new URLSearchParams(hash)

  const token = urlParams.get('#access_token');
  const search = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album&limit=100`,{
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: new Headers({
      'Authorization': 'Bearer '+token,
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }).catch( err => {
      alert('Expired Session')
  })
  const data = await search.json()
  const albums = !data.albums ? 
  window.location.replace('../') :
  [...data.albums.items.map( album =>{
    return Object.assign({},{
        id: album.id,
        artist: album.artists[0].name,
        album: album.name,
        year: album.release_date.slice(0,4),
        uri: album.uri,
        cover: album.images[1].url,
        price: parseFloat(album.release_date.slice(0,4))*0.01
        })
    }
  )]
  return  albums
}

export default spotifySearch