import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';

const mapType = type => {
    switch (type) {
        case 'new':
            return 'newstories';
        case 'top':
            return 'topstories';
        case 'best':
            return 'beststories';
        case 'ask':
            return 'askstories';
        case 'show':
            return 'showstories';
        case 'job':
            return 'jobstories';
        default:
            return 'topstories';
    }
};

const get = async id => {
    const result = await axios.get(`${baseUrl}/item/${id}.json`);

    const filterFields = ({ id, url, time, title } = {}) => ({
        id,
        url,
        time,
        title,
    });

    return filterFields(result.data);
};

export const getAll = async (type, limit) => {
    const result = await axios.get(`${baseUrl}/${mapType(type)}.json`);

    return await Promise.all(
        result.data.splice(0, limit).map(async id => {
            return await get(id);
        }),
    );
};
