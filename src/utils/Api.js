
import axios from 'axios';

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPEAPPKEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_DEVURL + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};