// document.getElementById("hover").onmouseover= function(){
//     alert("you hovered me")
// };
document.getElementById("keyInput").onkeydown=function(event){
    document.getElementById("showkey").innerText="you pressed"+event.key;
};