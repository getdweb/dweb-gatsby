import React, { useEffect } from 'react';

export default function HeroAnimation() {

    let canvas;
    let ctx;
    let particles;
    let amount;
    let mouse;
    let radius;

    let colors;

    let text;

    let ww;
    let wh;

    const initialize = function(){
        if (typeof window === `undefined`) return null;

        canvas = document.querySelector("#scene");
        ctx = canvas.getContext("2d");
        particles = [];
        amount = 0;
        mouse = {x:0, y:0};
        radius = 1;

        colors = ["#BBE022","#FF4F2C", "#00D6C6","#FCC924", "#E16EF9","#00B3F1"];

        text = "DWeb";

        ww = canvas.width = window.innerWidth;
        wh = canvas.height = window.innerHeight;

        window.addEventListener("resize", initScene);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("click", onMouseClick);
        window.addEventListener("touchend", onTouchEnd);
        initScene();
        requestAnimationFrame(render);
    }

    useEffect(() => {
        initialize();
    });
    
	function Particle(x,y){
		this.x =  Math.random()*ww;
		this.y =  Math.random()*wh;
		this.dest = {
			x : x,
			y: y
		};
		this.r =  Math.random()*4 + 2;
		this.vx = (Math.random()-0.5)*20;
		this.vy = (Math.random()-0.5)*20;
		this.accX = 0;
		this.accY = 0;
		this.friction = Math.random()*0.16 + 0.84;

		this.color = colors[Math.floor(Math.random()*6)];
	}

	Particle.prototype.render = function() {
		this.accX = (this.dest.x - this.x)/1000;
		this.accY = (this.dest.y - this.y)/1000;
		this.vx += this.accX;
		this.vy += this.accY;
		this.vx *= this.friction;
		this.vy *= this.friction;

		this.x += this.vx;
		this.y +=  this.vy;

		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
		ctx.fill();

		var a = this.x - mouse.x;
		var b = this.y - mouse.y;

		var distance = Math.sqrt( a*a + b*b );
		if(distance<(radius*80)){
			this.accX = (this.x - mouse.x)/100;
			this.accY = (this.y - mouse.y)/100;
			this.vx += this.accX;
			this.vy += this.accY;
		}
	}

	function onMouseMove(e){
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}

	function onTouchMove(e){
        if(e.touches.length > 0 ){
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        }
	}

    function onTouchEnd(e){
        mouse.x = -9999;
        mouse.y = -9999;
    }

	function initScene(){
		if (typeof window === `undefined`) return null;
		
		const dimentionSize = Math.max(window.innerWidth, window.innerHeight);
		ww = canvas.width = dimentionSize;
		wh = canvas.height = dimentionSize;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.font = "bold "+(ww/6)+"px sans-serif";
		ctx.textAlign = "center";
		ctx.fillText(text, ww/2, wh/2);

		var data  = ctx.getImageData(0, 0, ww, wh).data;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.globalCompositeOperation = "screen";

		particles = [];
		for(var i=0;i<ww;i+=Math.round(ww/80)){
			for(var j=0;j<wh;j+=Math.round(ww/80)){
				if(data[ ((i + j*ww)*4) + 3] > 100){
					particles.push(new Particle(i,j));
				}
			}
		}
		amount = particles.length;

	}

	function onMouseClick(){
		radius++;
		if(radius ===5){
			radius = 0;
		}
	}

	function render(a) {
		requestAnimationFrame(render);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < amount; i++) {
			particles[i].render();
		}
	};

    return (
        <canvas id="scene"></canvas>
    );
}