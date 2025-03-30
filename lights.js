if (localStorage.getItem("dark") === "true") {
	document.body.classList.add("dark");
}

let holding = false;

document.addEventListener("keydown", (e) => {
	if (e.key === "l" && !e.altKey && !e.shiftKey && !e.ctrlKey && holding === false && document.activeElement.tagName !== "INPUT") {
		holding = true;
		document.body.classList.toggle("dark");
		localStorage.setItem("dark", document.body.classList.contains("dark"));
	}
});

if (document.getElementById("mobile-dark-mode-toggle")) {
  document.getElementById("mobile-dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
		localStorage.setItem("dark", document.body.classList.contains("dark"));
  });
}

document.addEventListener("keyup", (e) => {
	if (e.key === "l" && !e.altKey && !e.shiftKey && !e.ctrlKey && document.activeElement.tagName !== "INPUT") {
		holding = false;
	}
});
