const axios = require("axios");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const FormData = require('form-data');



async function ttdl(text) {
	const options = {
    method: 'GET',
    url: 'https://tiktok-full-video-info-without-watermark.p.rapidapi.com/',
    params: {
    url: text,
  },
  headers: {
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'tiktok-full-video-info-without-watermark.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return response.data
} catch (error) {
	console.error(error);
	return error
}}

async function ytmp(text) {
const options = {
  method: 'GET',
  url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
  params: {id: text},
  headers: {
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return response.data
} catch (error) {
	console.error(error);
	return error
}}

async function ttviews(Linknya,jumlah,apisenja,idnya) {
  const url = 'https://ryupedia.biz.id/api/sosial-media';
  const apiKey = apisenja;
  const serviceId = idnya; // ID Layanan yang Anda inginkan
  const target = Linknya; // Input dengan username/link anda
  const quantity = jumlah; // Input dengan jumlah pesanan anda
  const customComments = 'Kustom Komentar anda'; // Input dengan Kustom Komentar anda

  try {
    const response = await axios.post(url, {
      api_key: apiKey,
      action:'pemesanan',
      layanan: serviceId,
      target: target,
      jumlah: quantity,
      //custom_comments: customComments
    });

    console.log(response.data); // Output response dari API
    return (response)
  } catch (error) {
    console.error(error)
    return(error);
  }
}

async function ttviews2(Linknya,jumlah,apimir,idnya,apiidmir) {
  const url = 'https://smm.mirpedia.com/api/order';
  let iid = 'c3JJbnBHQ2RUYjdYZ05NcW9qeGpWdz09';
  //console.log(iid)
  /*const apiKey = apimir;
  const apiId = apiidmir;
  const serviceId = idnya; // ID Layanan yang Anda inginkan
  const target = Linknya; // Input dengan username/link anda
  const quantity = jumlah; // Input dengan jumlah pesanan anda
  const customComments = 'Kustom Komentar anda'; // Input dengan Kustom Komentar anda
*/
  try {
    const response = await axios.post(url, {
      api_id: iid,
      api_key: apimir,
      service: idnya,
      target: Linknya,
      quantity: jumlah,
      custom_comments: 'kontolll'
    });
    console.log(typeof iid)
    console.log(typeof apimir)
    console.log(typeof idnya)
    console.log(typeof Linknya)
    console.log(typeof jumlah)
    console.log(apiidmir)
    console.log(apimir)
    console.log(idnya)
    console.log(Linknya)
    console.log(jumlah)
    console.log(response); // Output response dari API
    return (response)
  } catch (error) {
    console.error(error)
    return(error);
  }
  /*let f = await fetch("https://smm.mirpedia.com/api/order", {
    "method": "POST",
    "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json"
    },
    "body": JSON.stringify({
      "api_id": apiId,
      "api_key": apiKey,
      "service": serviceId,
      "target": target,
      "quantity": quantity,
      "custom_comments": customComments
    })
    })
    let res = await f.json()
    console.log(f)

*/

}


async function ffstalk(Id) {
const options = {
  method: 'GET',
  url: 'https://id-game-checker.p.rapidapi.com/free-fire/'+Id,
  headers: {
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return(response.data.data)
} catch (error) {
	console.error(error);
}
}

async function cekScam(url) {
const options = {
  method: 'GET',
  url: 'https://exerra-phishing-check.p.rapidapi.com/',
  params: {
    url: url
  },
  headers: {
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'exerra-phishing-check.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return(response.data.data)
} catch (error) {
	console.error(error);
}
}

async function tweetdl(url) {
const options = {
  method: 'POST',
  url: 'https://twitter65.p.rapidapi.com/api/twitter/links',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'twitter65.p.rapidapi.com'
  },
  data: {
    url: url
  }
};
try {
	const response = await axios.request(options);
	console.log(response);
	//console.log(response.data);
	return(response)
} catch (error) {
	console.error(error);
}
}


async function shazam(url) {
    
    
const options = {
  method: 'GET',
  url: 'https://shazam-api6.p.rapidapi.com/shazam/recognize/',
  params: {url: url},
  headers: {
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
//	console.log(response);
	console.log(response.data);
	return(response.data)
} catch (error) {
	console.error(error);
}
}

async function golens(url) {
const options = {
  method: 'GET',
  url: 'https://reverse-image-search1.p.rapidapi.com/reverse-image-search',
  params: {
    url: url,
    limit: '50',
    safe_search: 'off'
  },
  headers: {
    'X-RapidAPI-Key': '356ff5cb42msh86a4a79141766edp10489ejsncdb2f9d53b39',
    'X-RapidAPI-Host': 'reverse-image-search1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return(response.data)
} catch (error) {
	console.error(error);
}
}

async function instastory(username) {
const options = {
  method: 'GET',
  url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/stories',
  params: {
    username_or_id_or_url: username
  },
  headers: {
    'X-RapidAPI-Key': 'bb8eb3a232msh8a373e18f5c99ccp1f7096jsne36049c70288',
    'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return(response.data)
} catch (error) {
	console.error(error);
}
}

module.exports = { ttdl , ytmp , ttviews, ttviews2, ffstalk , cekScam, tweetdl, shazam, golens, instastory}