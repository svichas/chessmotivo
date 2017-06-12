
scale = 20;
color = [
	"black",
	"white"
];

scrolled = false;

window.onload = function() {

	canvas  = document.getElementById("patern"); 
	context = canvas.getContext("2d");


	canvas.addEventListener("mousewheel", scrollListener);
	canvas.addEventListener("DOMMouseScroll", scrollListener, false);


	canvas.width  = window.innerWidth,
	canvas.height = window.innerHeight;

	render();


}

function scrollListener(event) {
	

	event.preventDefault();
	scrolled = true;
	scale += (event.deltaY < 0) ? -1 : 1;
	if (scale <= 0) {
		scale = 0;
 		//return false;
	}
	render();
} 

window.onresize = function(event) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	render();
};


function render() {

	if (scale >= 1) {

		for (x=0;x<parseInt(canvas.width/scale)+1;x++) {
			for (y=0;y<parseInt(canvas.height/scale)+1;y++) {
				renderPixel(x,y);
			}
		}

		if (!scrolled) {
			context.font="90px Arial";
			context.fillStyle= "#39CCCC";
			context.fillText("SCROLL 4 AWESOMENESS", (canvas.width/2)-600, (canvas.height/2)-(90/2));
		}
	} else {
		context.fillStyle = color[0];
		context.fillRect(0,0,canvas.width, canvas.height);

		context.font="90px Arial";
		context.fillStyle= color[1];
		context.fillText("KTHXBAI", (canvas.width/2)-300, (canvas.height/2)-(90/2));

	}

}


function renderPixel(x,y) {

	if (x % 2 == 0 && y % 2 == 0) {
		context.fillStyle = color[0];
	} else {
		if (x % 2 != 1) {
			context.fillStyle = color[1];
		} else {
			if (y % 2 != 1) {
				context.fillStyle = color[1];
			} else {
				context.fillStyle = color[0];
			}
		}
		
	}
	

	context.fillRect(x*scale, y*scale, scale, scale);

}