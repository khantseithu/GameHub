import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '96a4d70610f149b69ea913d7d520d28c'
    }
})

