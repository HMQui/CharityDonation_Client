import axios from "axios";

const SERVER_URL = "https://api.gofund.io.vn/api/balance";

const getUserBalance = async (userId) => {
    try {
        const res = await axios.post(SERVER_URL, { userId }, { withCredentials: true });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export { getUserBalance };
