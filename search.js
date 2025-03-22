let q = new URLSearchParams(window.location.search).get("q");

if (q) {
	location.href = q.includes(".") ? q : `${q.replace(/ /g, "_").toLowerCase()}.html`;
} else {
	location.href = "/";
}