if (!localStorage.getItem("dark")) {
	document.querySelector(".panel").innerHTML += "<p>press 'l' to toggle dark mode!!</p>";
}

fetch("https://lastfm-last-played.biancarosa.com.br/raynecloudy/latest-song").then(res => res.json().then(json => {
	document.getElementById("lastfm_title").innerText = json["track"]["name"];
	document.getElementById("lastfm_title").href = json["track"]["url"];
	document.getElementById("lastfm_artist").innerText = json["track"]["artist"]["#text"];
	document.getElementById("lastfm_artist").href = `https://www.last.fm/music/${json["track"]["artist"]["#text"]}/`;
}));

document.querySelector("#search").addEventListener("keyup", (e) => {
	if (e.key.length === 1 || e.key === "Backspace") {
		Array.from(document.querySelectorAll("#links > li")).forEach(element => {
			if (element.querySelector("a").innerText.match(document.querySelector("#search").value)) {
				element.style.pointerEvents = "initial";
				element.style.opacity = "1";
				element.querySelector("a").tabIndex = "0";
			} else {
				element.style.pointerEvents = "none";
				element.style.opacity = "0.4";
				element.querySelector("a").tabIndex = "-1";
			}
		});
	}
});
