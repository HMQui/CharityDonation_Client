import axios from "axios";

const SERVER_URL = "https://api.gofund.io.vn/api/transaction";

const createNewOrderPaypal = async (amount) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/deposit/paypal/create-order`,
            { amount },
            { withCredentials: true }
        );
        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const capturePaypal = async (orderId, fiatAmount) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/deposit/paypal/capture`,
            { orderId, fiatAmount },
            { withCredentials: true }
        );
        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const getTransactionHistory = async (userId) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/history`,
            { userId },
            { withCredentials: true }
        );

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export { createNewOrderPaypal, capturePaypal, getTransactionHistory };
