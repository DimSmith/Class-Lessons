import { useEffect, useState } from "react";
import "./SongList.css";
import { Song } from "../../model/song";
import { youtube } from "../../redux/store";
import { downloadSongAction } from "../../redux/SongReducer";
import SingleSong from "../SingleSong/SingleSong";

export function SongList(): JSX.Element {
    const [songList, setSongList] = useState<Song[]>([]);
    useEffect(() => {
        if (youtube.getState().songs.allSongs.length < 1) {
            try{
                let mySongs = JSON.parse(localStorage.getItem("mySongs") || "")|| [];
                if (mySongs.length > 0) {
                setSongList(mySongs);
                console.log(mySongs);
                console.log("send songs to redux");
                youtube.dispatch(
                    downloadSongAction(mySongs)
                    );
                }
            }catch(err){
                console.log("Error");
            }
        }
    },[]);
    return (
        <div className="SongList">
			<h1>our song list, we will use map</h1>
            <hr />
        {youtube.getState().songs.allSongs.map((item,index) => (
        <SingleSong key={index} item={item} />
        ))}
        </div>
    );
}
