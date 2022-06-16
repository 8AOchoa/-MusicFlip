import {useState, useEffect} from 'react';
import Player from './Player';
import { Link, useParams } from "react-router-dom";

function PlayerApp() {
  const [songs] = useState([
    {
      title: "Song1",
      artist: "Artist 1",
      img_src: "./images/song-1.jpg",
      src: "./music/Song 1 TBK.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/Song 2 TBK.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/Song 3 TBK.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/Song 4 TBK.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (


    <div className="PlayerApp">

      <div className="PlayerApp-Nav">

      <button  class="add-song-btn"><Link to="/tracks" className="link-style">All Tracks</Link></button>
      <button  className="add-song-btn"><Link to="/new" className="link-style" >Add a Song</Link></button>

      </div>


      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />


    </div>


  );
}

export default PlayerApp;
