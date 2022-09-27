import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
    isPlaying && activeSong?.title === song.title ? (
        <FaPauseCircle className="text-green" size={40} onClick={handlePause} />
    ) : (
        <FaPlayCircle className="text-green" size={40} onClick={handlePlay} />
    );

export default PlayPause;
