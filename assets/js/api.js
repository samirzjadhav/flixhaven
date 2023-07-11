"use strict";

const api_key = "24fa3c2f5ede86d67022ddea455f8ffe";
const imageBaseURL = "https://image.tmdb.org/t/p/";

/**
 * fetch data from a server using the "url" and presses
 * the result in json data to a 'callback' function,
 * along with an optional parameter if has 'optionalparam'.
 */

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
