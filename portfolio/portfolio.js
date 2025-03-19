fetch("https://api.github.com/users/raynecloudy").then(res => res.json().then(data => {
	document.querySelector("#repository_count").innerText = data.public_repos;
	document.querySelector("#gist_count").innerText = data.public_gists;
	document.querySelector("#follower_count").innerText = data.followers;
}));