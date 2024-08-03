const axios = require("axios");

const goLens = async(url) => {
 return new Promise((resolve, reject) => {
   const options = {
     method: 'GET',
     url: 'https://google-reverse-image-search.p.rapidapi.com/imgSearch',
     params: { url },
     headers: {
      'X-RapidAPI-Host': 'google-reverse-image-search.p.rapidapi.com',
      'X-RapidAPI-Key': '53513471femsh11b7c46a7da0a85p119682jsncc66a4e30134'
     }
   };

   axios.request(options).then(function (response) {
      var result = {
         status: response.status,
         imgUrl: response.data.imgUrl,
         url: response.data.googleSearchResult
      }
      resolve(result)
   }).catch(function (error) {
      console.error(error);
      var tek = {
         status: 404,
         msg: 'Server Error!'
      }
      resolve(tek)
   });
 })
}


const Difusi = async(model,prompt) => {
 return new Promise((resolve, reject) => {
   const options = {
     method: 'POST',
     url: 'https://animimagine-ai.p.rapidapi.com/generateImage',
     headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'a5edacee68msh8998fe94c21615bp143d91jsnd5adccb3bab5',
    'X-RapidAPI-Host': 'animimagine-ai.p.rapidapi.com'
  },
    data: {
    selected_model_id: {model},
    selected_model_bsize: '512',
    prompt: {prompt}
  }
};
   axios.request(options).then(function (response) {
      var result = {
         status: response.status,
         imgUrl: response.data.imgUrl,
         message: response.data.message
      }
      resolve(result)
   }).catch(function (error) {
      console.error(error);
      var tek = {
         status: 404,
         msg: 'Server Error!'
      }
      resolve(tek)
   });
 })
}




module.exports.goLens = goLens
module.exports.Difusi = Difusi