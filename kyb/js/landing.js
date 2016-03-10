var mask = document.getElementById("mask");
var land = document.getElementById("land");
var close = document.getElementsByClassName("land-close");
var top = document.body.scrollTop;
var bodyHeight = document.body.scrollHeight;
var bodyWidth = document.body.scrollWidth;
window.onload = function(){
    mask.style.height = bodyHeight+"px";
    mask.style.width = bodyWidth+"px";
}
function closing(){
    mask.style.display = "none";
    land.style.display = "none";
}
function landing(){
    mask.style.display = "block";
    land.style.display = "block";
}
/**
 * Created by john on 15-9-10.
 */
