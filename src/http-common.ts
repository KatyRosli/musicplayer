import axios from 'axios';

export default axios.create({
    baseURL: 'https://spotify23.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
});
