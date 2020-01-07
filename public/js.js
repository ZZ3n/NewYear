$(function () {
    console.log("jquery ready");
    let $fixed_on_top = $("#fixed_on_top");
    let padding_on_top = $fixed_on_top.css("height");
    
    $("body").css("padding-top",padding_on_top);

    let $youtube = $("#youtube");
    const youtube_h = $youtube.css("width").replace(/[^-\d\.]/g,'') *3/4;
    console.log(youtube_h);
    $youtube.css("height",youtube_h);
    $("#youtube *").css("height",youtube_h);

});