var pages = ["home", "about", "tours", "specials", "blog", "contact", "israel", "usa", "aussie", "newz", "france", "egypt", "japan", "canada", "uae"];

export function changePage () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
        $("#app").html(data);
    })
} else {
    $.get(`pages/home.html`, function (data) {
        $("#app").html(data);
        $('nav').addClass('nav-white'); 
        $('nav').removeClass('nav-black');
        $('span').addClass('logo-white'); 
        $('span').removeClass('logo-black'); 
        $('#links').removeClass('a-black'); 
    })
    }
    if (pageID == pages[0]) {
    $('nav').addClass('nav-white');
	$('nav').removeClass('nav-black');
    $('span').addClass('logo-white'); 
    $('span').removeClass('logo-black'); 
    $('#links').addClass('a-white'); 
    $('#links').removeClass('a-black'); 
    // console.log(pageID);
} else {
    $('nav').removeClass('nav-white');
	$('nav').addClass('nav-black');
    $('span').removeClass('logo-white'); 
    $('span').addClass('logo-black'); 
    $('#links').addClass('a-black'); 
    // console.log(pageID);
}
}



