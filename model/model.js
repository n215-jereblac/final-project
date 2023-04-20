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
    })
    }

    if (pageID = [0]) {
        $("#nav").addClass("nav-white");
    } else {
        $("#nav").addClass("nav-black");
    }
}