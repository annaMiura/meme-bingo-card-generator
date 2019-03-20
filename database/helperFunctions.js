const fetch = require("node-fetch");

async function grab1000MemesPerSubreddit(subRedditString, num) {
    let result = [];
    for (let i = 0; i < num; i++) {
        const response = await grabData(subRedditString, i);
        result = result.concat(response);
    }
    return result;
}
const grabData = async (subRedditString, num) => {
    return fetch(`https://api.imgur.com/3/gallery/r/${subRedditString}/${num}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Client-ID ${process.env.IMGUR_CLIENTID}`,
                'Bearer': process.env.IMGUR_BEARER,
                'Content-Type': "application/json"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(memeArray => {
            return memeArray.data;
        })
        .then(dataArray => {
            return dataFormatter(dataArray);
        })
        .catch(err => {
            console.error('something went wrong grabbing new dAnKmEmEs', err);
        })
}

const dataFormatter = arrayOfObjects => {
    return arrayOfObjects.map(obj => {
        return obj = {
            id: obj.id,
            title: obj.title,
            link: obj.link,
            score: obj.score,
            views: obj.views,
            nsfw: obj.nsfw
        }
    });
}

module.exports.seedMemes = async array => {
    const output = {};
    const fetchMemes = array.map(async subreddit => {
        const result = await grab1000MemesPerSubreddit(subreddit, 5);
        output[subreddit] = result;
    })
    const result = await Promise.all(fetchMemes);
    return output;
};
