import axios from 'axios';

export default axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '621159b414msha8cfd4bce1e54bfp1abec8jsn3162e27ed190',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
});
