import {AxiosResponse} from "axios";

const axios = require('axios').default;

const backURL = "/api/";

// Get all users
export const GET = (request: string) => axios.get(backURL + request)
    .then(function (response: AxiosResponse) {
        // Handle success
        return response.data;
    })
    .catch(function (error: Error) {
        // Handle error
        throw error;
    })

/*// Optionally the request above could also be done as
axios.get('/user', {
    params: {
        ID: 12345
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}*/

/* const useHTTP = async (url) => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error ('Error')
    }

    return await res.json()

}

export default useHTTP
* */