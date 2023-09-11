import axios from 'axios'


async function sendRequest(url, method) {
    return axios({
        method,
        url,
    })
}

export default sendRequest;