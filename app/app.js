import { changePage } from "../model/model.js";

function initListener () {
    $(window).on("hashchange", changePage);
    changePage();
}

$(document).ready(function () {
    initListener();
})
