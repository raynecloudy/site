let q = new URLSearchParams(window.location.search).get("q");

if (q) {
	location.href = q.endsWith(".html") || q.endsWith("/") ? q : `${q}.html`;
} else {
	location.href = "/";
}