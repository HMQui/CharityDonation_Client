import axios from "axios";

const SERVER_URL = "https://api.gofund.io.vn/api/donation";

const insertDonation = async (d) => {
    try {
        console.log(d);
        const res = await axios.post(`${SERVER_URL}/insert`, d, { withCredentials: true });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export { insertDonation };
