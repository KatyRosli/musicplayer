import http from '../http-common';
import IArtist from '../types/Artist';


const getArtist = (id: string) => {
    return http.get<IArtist>(`/artists/`, { params: { ids: id }});
};

const ArtistService = {
    getArtist,
};

export default ArtistService;
