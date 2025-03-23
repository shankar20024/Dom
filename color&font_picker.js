function backgroundcolor(){
    const selectedcolor=document.getElementById("colorInput").value;
    document.getElementById("mainBody").style.backgroundColor= selectedcolor;
}
function slider(){
    let size=document.getElementById("range").value;
    document.getElementById("pick").style.fontSize=size+"px";
    document.getElementById("showSize").innerText = size;
}