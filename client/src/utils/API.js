import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://edamam-recipe-search.p.rapidapi.com/search',
  params: {q: 'chicken'},
  headers: {
    'X-RapidAPI-Key': '2bf5264aa9msh13642a6d0221fb8p1ee124jsne93df4feffb6',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});