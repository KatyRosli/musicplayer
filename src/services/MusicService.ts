import http from '../http-common';
import IMusicData from '../types/Music';

//id: 11092801802;

const getPlaylist = (id: number) => {
    return http.get<IMusicData>(`/playlist/${id}`);
};

const MusicService = {
    getPlaylist,
};

export default MusicService;
