document.getElementById("colorkey").onkeydown =function(event){
    const body=document.getElementById("mainbody");
    const msg=document.getElementById("status");

    if (event.key==="r"){
        body.style.backgroundColor="red";
        msg.innerText="Your Background Color was red";
    }else if (event.key==="g"){
        body.style.backgroundColor="green";
        msg.innerText="Your Background Color was red";
    }else if (event.key==="b"){
        body.style.backgroundColor="blue";
        msg.innerText="Your Background Color was red";
    } else {
        msg.innerText="please enter valid text (r/g/b)"
    }
    
}

