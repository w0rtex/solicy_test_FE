import { AxiosResponse } from "axios";

const axios = require("axios").default;

const backURL = "/api/";

// Get all users
export const GET = (request: string) =>
    axios
        .get(backURL + request)
        .then(function (response: AxiosResponse) {
            // Handle success
            return response.data;
        })
        .catch(function (error: Error) {
            // Redirect to the main page
            window.location.href = "/";

            // Handle error
            throw error;
        });
