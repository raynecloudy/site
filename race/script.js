const start_btn = document.querySelector("#start");

let names = [
	"bob",
	"susan",
	"dave",
	"joe",
	"fred",
	"holly",
	"samantha",
	"patty",
	"shirley",
	"jeff"
];

const oneko_num = 5;
let onekos = [];
let place = 1;

if (oneko_num !== null) {
	for (let i = 0; i < oneko_num; i++) {
		let oneko = new Oneko();
		oneko.x = 20;
		oneko.y = Math.random() * window.innerHeight;
		oneko.speed = 5 + Math.random() * 10;
		oneko.updateSpeed = 60 + Math.random() * 20;
		oneko.setTarget(oneko.x, oneko.y);
		oneko.element.style.filter = `sepia(1) saturate(4) hue-rotate(${Math.random() * 360}deg)`;
		let name = names[Math.floor(Math.random() * names.length)];
		names = names.filter(fname => fname !== name);
		oneko.element.innerHTML = `<span>${name}</span>`;
		oneko.addEventListener("stop_running", () => {
			if (document.querySelector("#start") !== undefined) {
				// this line breaks it for some reason??
				// document.body.innerHTML += `<p>${place}: ${oneko.element.innerText}</p>`;
				place += 1;
			}
		});
		
		onekos.push(oneko);
	}
}

start_btn.addEventListener("click", () => {
	start_btn.remove();
	onekos.forEach((oneko) => {
		oneko.setTarget(window.innerWidth - oneko.x, oneko.y);
	});
});