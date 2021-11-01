import React, { useEffect, useState } from "react";

export const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=112024")
      .then(res => res.json())
      .then(json => {
        setAlbums(json.album);
        console.log("inside fetch", json.album);
      });
  }, []);
  console.log(albums);
  return (
    <div>
      {albums.map(item => {
        return (
          <div>
            {/* {console.log("albums inside rturn", albums)} */}
            <img src={item.strAlbumThumb} alt={item.strAlbum} />
            <h2>{item.strAlbum}</h2>
            <h3>{item.strArtist}</h3>
          </div>
        );
      })}
    </div>
  );
};
