const addresses = {
	"ai": "https://ai.raynec.dev/",
	"shirley": "https://shirley.raynec.dev/"
}

const check_status = (id) => {
	let element = document.getElementById(id);
	fetch(addresses[id]).then(res => {
		if (res.status === 200) {
			element.className = "up";
			element.innerText = "\xa0OK\xa0";
		} else {
			element.className = "down";
			element.innerText = "DOWN";
		}
	}).catch(() => {
		element.className = "down";
		element.innerText = "DOWN";
	});
}

check_status("ai");
check_status("shirley");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
	await sleep(60_000);
	location.reload();
})();
