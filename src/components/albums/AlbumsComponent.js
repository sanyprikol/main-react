import {getAlbums} from "../../services";
import AlbumComponent from "./AlbumComponent";

import {useEffect, useState} from "react";

function AlbumsComponent  ()  {

    const [albums, setAlbums] =useState([]);

    useEffect(() =>{
        getAlbums().then(value => setAlbums([...value]))
    },[])

    return (
        <div>
            {albums.map(value => <AlbumComponent item={value} key={value.id}/>)}

        </div>
    );
}

export default AlbumsComponent;

