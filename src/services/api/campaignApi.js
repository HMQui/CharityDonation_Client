import axios from "axios";

const SERVER_URL = "https://api.gofund.io.vn/api/campaign";

const getCategoriesCampaign = async () => {
    try {
        const res = await axios.get(`${SERVER_URL}/categories`);
        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const createCampaign = async (formData) => {
    try {
        const res = await axios.post(`${SERVER_URL}/create`, formData, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" }
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const getCampaignsByUser = async (userId) => {
    try {
        const res = await axios.get(`${SERVER_URL}/user/${userId}`, { withCredentials: true });
        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const getFullInfoCampaignById = async (campaignId) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/full_info`,
            { campaignId },
            { withCredentials: true }
        );

        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const insertCampaignReaction = async (data) => {
    try {
        const res = await axios.post(`${SERVER_URL}/reaction/insert`, data, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const updateCampaignReaction = async (data) => {
    try {
        const res = await axios.post(`${SERVER_URL}/reaction/update`, data, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const deleteCampaignReaction = async (data) => {
    try {
        const res = await axios.post(`${SERVER_URL}/reaction/delete`, data, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const getUpdatedInfoCampaign = async (campaignId) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/updates`,
            { campaignId },
            { withCredentials: true }
        );

        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const insertCampaignUpdateInfo = async (data) => {
    try {
        const res = await axios.post(`${SERVER_URL}/updates/insert/info`, data, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const insertCampaignUpdateImages = async (formData) => {
    try {
        const res = await axios.post(`${SERVER_URL}/updates/insert/images`, formData, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" }
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return { error: 400, message: "Client fault" };
    }
};

const getCampaignsByFilter = async (filters) => {
    try {
        const queryString = new URLSearchParams(filters).toString();

        const res = await axios.get(`${SERVER_URL}/filter?${queryString}`, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

const getCampaignBalance = async (campaignId) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/balance`,
            { campaignId },
            { withCredentials: true }
        );

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

const insertCampaignReports = async (formData) => {
    try {
        const res = await axios.post(`${SERVER_URL}/report/insert`, formData, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

const getCampaignInfoFollowingReport = async () => {
    try {
        const res = await axios.get(`${SERVER_URL}/info/report`, {
            withCredentials: true
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

const updateCampaignMetamaskAdd = async (add, campaignId) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/update/metamask_add`,
            { add, campaignId },
            {
                withCredentials: true
            }
        );

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

const updateCampaignSuspend = async (status, campaignId) => {
    try {
        const res = await axios.post(
            `${SERVER_URL}/update/suspend`,
            { status, campaignId },
            {
                withCredentials: true
            }
        );

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export {
    getCategoriesCampaign,
    createCampaign,
    getCampaignsByUser,
    getFullInfoCampaignById,
    insertCampaignReaction,
    updateCampaignReaction,
    deleteCampaignReaction,
    getUpdatedInfoCampaign,
    insertCampaignUpdateInfo,
    insertCampaignUpdateImages,
    getCampaignsByFilter,
    getCampaignBalance,
    insertCampaignReports,
    getCampaignInfoFollowingReport,
    updateCampaignSuspend,
    updateCampaignMetamaskAdd
};
