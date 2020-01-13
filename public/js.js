$(function () {
	resizeHandler(null);
	paddingOnTop();
	window.addEventListener("resize",resizeHandler);
	document.body.addEventListener("transitionend",paddingOnTop);
});

function resizeHandler(evt) {
	console.log("resize!" + window.innerWidth);
	//paddingOnTop();
	const wrapper = document.getElementById("wrapper");
	const menu = document.getElementById("Menu");
	menu.style.right = window.getComputedStyle(wrapper).marginRight;
}

function paddingOnTop() {
	console.log("paddingOnTop");
	const fixed_on_top = document.getElementById("fixed_on_top");
	document.body.style.paddingTop = fixed_on_top.clientHeight + "px";

}
