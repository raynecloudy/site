fetch("https://lastfm-last-played.biancarosa.com.br/raynecloudy/latest-song").then(res => res.json().then(json => {
	document.getElementById("lastfm_title").innerText = json["track"]["name"];
	document.getElementById("lastfm_title").href = json["track"]["url"];
	document.getElementById("lastfm_artist").innerText = json["track"]["artist"]["#text"];
	document.getElementById("lastfm_artist").href = `https://www.last.fm/music/${json["track"]["artist"]["#text"]}/`;
}));