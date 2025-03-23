function changeStyle(){
    const msg=document.getElementById("status");
    const body=document.getElementById("mainbody");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")){
        msg.innerText="Dark Mode On ";
    }else{
        msg.innerText="Light Mode On";
    }
}
