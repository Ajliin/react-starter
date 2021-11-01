import React, { useEffect, useState } from "react";

export const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay")
      .then(res => res.json())
      .then(json => {
        setAlbums(json.artists[0]);
        console.log(json.artists);
        console.log("albums", albums);
      });
  }, []);
  console.log(albums);
  return (
    <div>
      {/* {albums.map(album => ( */}
      {
        <div>
          {console.log("albums inside rturn", albums)}
          <img src={albums.strAlmbumThumb} alt="artist" />
          <h2>{albums.strAlbum}</h2>
          <h3>{albums.strArtist}</h3>
        </div>
      }
      {/* // ))} */}
    </div>
  );
};
