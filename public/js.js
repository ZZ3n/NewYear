$(function () {
	resizeHandler(null);
	paddingOnTop();
	window.addEventListener("resize",resizeHandler);
	document.body.addEventListener("transitionend",paddingOnTop);
});

//리사이즈시 발생하는 콜백 함수. js로딩시에도 발생함. body 트랜지션을 일으킴.
function resizeHandler(/*event*/) {
	const wrapper = document.getElementById("wrapper");
	const menu = document.getElementById("Menu");
	menu.style.right = window.getComputedStyle(wrapper).marginRight;
}

//body에 패딩을 줘서 메뉴바가 페이지를 가리지 않도록 함.
//body 트랜지션 엔드의 콜백함수임.
function paddingOnTop() {
	const fixed_on_top = document.getElementById("fixed_on_top");
	document.body.style.paddingTop = fixed_on_top.clientHeight + "px";

}