import axios from "axios";

const API_KEY = "15725306-bc876a9032cf9c2bacf7059da";

const BASE_URL = "https://pixabay.com/api/";

const fetch = (query, page = 1) => {
  return axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default fetch;
