if (localStorage.getItem("dark") === "true") {
	document.body.classList.add("dark");
}

let holding_l = false;

document.addEventListener("keydown", (e) => {
	if (e.key === "l" && !e.altKey && !e.shiftKey && !e.ctrlKey && holding_l === false && document.activeElement.tagName !== "INPUT") {
		holding_l = true;
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
		holding_l = false;
	}
});

Array.from(document.getElementsByClassName("restricted")).forEach((element) => {
  element.tabIndex = 0;
  element.addEventListener("keydown", (e) => {
    if (e.key === "s" && !e.altKey && !e.shiftKey && !e.ctrlKey) {
      element.classList.toggle("show");
    }
  });
  element.addEventListener("blur", () => {
    element.classList.remove("show");
  });
});
