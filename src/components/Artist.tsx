import React, { useEffect, useState } from 'react';
import ArtistService from '../services/ArtistService';
import IArtist from '../types/Artist';

const Artist = () => {
    const [artist, setArtist] = useState<string>('');

    useEffect(() => {
        ArtistService.getArtist('2w9zwq3AktTeYYMuhMjju8')
        .then((response: any) => {
            console.log(response);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }, []);

    return(
        <h4> Hi </h4>
    )
}

export default Artist;
