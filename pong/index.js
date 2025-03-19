let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d");

let paddle_y = window.innerHeight/2;

let ball_x = window.innerWidth/2;
let ball_y = window.innerHeight/2;
let ball_xv = 7;
let ball_yv = 5;

let offset_x = 0;
let offset_y = 0;

let score = 0;
let opponent_score = 0;

let speed = 1;

let intro_frame = 360;

let menu = true;

let casual = true;

let dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

function update() {
	// resizing
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	// theme
	canvas.style.backgroundColor = dark ? "#1d1b1f" : "#ffffff";
	ctx.strokeStyle = dark ? "#ffffff" : "#1d1b1f";

	if (menu === true) {
		ctx.font = "25px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		ctx.strokeText("press 1 to play competitive", window.innerWidth/2, window.innerHeight/2-30);
		ctx.strokeText("press 2 to play casual", window.innerWidth/2, window.innerHeight/2);
		ctx.strokeText("press 3 to change theme", window.innerWidth/2, window.innerHeight/2+30);
	} else {
		if (intro_frame > 0) {
			intro_frame -= 1;
			ctx.font = "25px monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "middle";
			ctx.strokeText("press escape to exit anytime.", window.innerWidth-70, window.innerHeight-70);
		}
		
		if (!casual) {
			// divider
			ctx.moveTo(window.innerWidth/2-offset_x, 0);
			ctx.lineTo(window.innerWidth/2-offset_x, window.innerHeight-window.innerHeight*(intro_frame/360));
			ctx.stroke();
			
			// score text
			ctx.font = "200px monospace";
			ctx.textAlign = "right";
			ctx.textBaseline = "middle";
			ctx.strokeText(score, window.innerWidth/2-150-offset_x-(800*intro_frame/360), window.innerHeight/2-offset_y);
			
			ctx.textAlign = "left";
			ctx.strokeText(opponent_score, window.innerWidth/2+150-offset_x+(800*intro_frame/360), window.innerHeight/2-offset_y);
		}
		
		// player paddle
		ctx.strokeRect(90-offset_x, paddle_y-80-offset_y, 30, 160);
		
		// ball
		if (ball_x + ball_xv*speed + 15 >= window.innerWidth || ball_x + ball_xv*speed - 15 <= 0) {
			ball_xv *= -1;
			if (Math.abs(ball_xv) === ball_xv) {
				opponent_score += 1;
			} else {
				score += 1;
			}
		}
		if (ball_y + ball_yv*speed + 15 >= window.innerHeight || ball_y + ball_yv*speed - 15 <= 0) {
			ball_yv *= -1;
		}
		if ((ball_x + ball_xv*speed + offset_x <= 135 && ball_x + ball_xv*speed + offset_x >= 75) && (ball_y + ball_yv*speed - paddle_y + offset_y >= -95 && ball_y + ball_yv*speed - paddle_y + offset_y <= 95)) {
			ball_xv = Math.abs(ball_xv);
		}
		
		if (intro_frame === 0) {
			ball_x += ball_xv*speed;
			ball_y += ball_yv*speed;
		}
		ctx.strokeRect(ball_x-15, ball_y-15, 30, 30);
		
		offset_x = casual ? 0 : (ball_x-window.innerWidth/2)/4;
		offset_y = casual ? 0 : (ball_y-window.innerHeight/2)/20;
		
		speed += 0.00005;
	}

	requestAnimationFrame(update);
}

requestAnimationFrame(update);

document.addEventListener("mousemove", function(e) {
	if (intro_frame === 0) {
		paddle_y = e.clientY;
	}
});

document.addEventListener("keydown", function(e) {
	if (menu) {
		if (e.key === "1") {
			paddle_y = window.innerHeight/2;
			ball_x = window.innerWidth/2;
			ball_y = window.innerHeight/2;
			ball_xv = 7;
			ball_yv = 5;
			offset_x = 0;
			offset_y = 0;
			score = 0;
			opponent_score = 0;
			speed = 1;
			intro_frame = 360;
			casual = false;
			menu = false;
			
			new Audio("pong.wav").play();
		}if (e.key === "2") {
			paddle_y = window.innerHeight/2;
			ball_x = window.innerWidth/2;
			ball_y = window.innerHeight/2;
			ball_xv = 7;
			ball_yv = 5;
			offset_x = 0;
			offset_y = 0;
			score = 0;
			opponent_score = 0;
			speed = 1;
			intro_frame = 360;
			casual = true;
			menu = false;
			
			new Audio("pong.wav").play();
		} else if (e.key === "3") {
			dark = !dark;
		}
	} else {
		if (e.key === "Escape") {
			e.preventDefault();
			menu = true;
		}
	}
});