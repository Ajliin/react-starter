import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <div key={item.idAlbum}>
            {/* {console.log("albums inside rturn", albums)} */}
            <img src={`${item.strAlbumThumb}/preview`} alt={item.strAlbum} />
            <h2>{item.strAlbum}</h2>
            <Link to={`/albums/${item.idAlbum}`}>
              <h3>{item.strArtist}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
