"use strict";

// ADD EVENT ON MULTIPLE ELEMENTS

const addEventOnElements = function (elements, eventType, callback) {
  for (const elem of elements) elem.addEventListener(eventType, callback);
};

// Toggle search box in mobile device || small screen

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function () {
  searchBox.classList.toggle("active");
});

// Store movieId in 'localStorage
// when you click any movie card

const getMovieDetail = function (movieId) {
  window.localStorage.setItem("movieId", String(movieId));
};

// movie list
const getMovieList = function (urlParam, genreName) {
  window.localStorage.setItem("urlParam", urlParam);
  window.localStorage.setItem("genreName", genreName);
};
