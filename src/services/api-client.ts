import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4a962f9c6f164bc7a9724905a309559a'
    }
})