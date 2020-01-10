$(function () {
	
    
	function resizeHandler(evt) {
        let $fixed_on_top = $("#fixed_on_top");
	    let padding_on_top = $fixed_on_top.css("height");

	    $("body").css("padding-top", padding_on_top);
		console.log("resize!" + window.innerWidth);
		const $NnE_img = $(".NnE-img");
		if (window.innerWidth >= 768)
		{
			console.log("big");
			$NnE_img.css("width","100%");
            
		}
		else {
			console.log("small");
			$NnE_img.css("width","initial");
		}
	}
    resizeHandler(null);
	window.addEventListener("resize",resizeHandler);
});

