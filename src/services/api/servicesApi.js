import axios from "axios";

const SERVER_URL = "https://api.gofund.io.vn/api/services";

const enhanceText = async (text) => {
    try {
        const res = await axios.post(`${SERVER_URL}/enhance-text`, { text })

        return res.data
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
}

export {
    enhanceText,
}
