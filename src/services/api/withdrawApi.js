import axios from "axios";

const SERVER_URL = "https://api.gofund.io.vn/api/withdraw";

const getWithdrawRequestByFilters = async (filters) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/filter`,
            { filters },
            { withCredentials: true }
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export { getWithdrawRequestByFilters };
