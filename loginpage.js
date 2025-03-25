const login=()=>{
    const email=document.getElementById("email").value.trim();
    const pass=document.getElementById("pass").value;
    const msg = document.getElementById("output");

    if (email==="" || pass ===""){
        msg.innerText="Please fill all the field ";
    }else if(email ==="admin@gmail.com" || email==="Shankar" && pass === "1234"){
        msg.innerText="login Successful ";
    }else{
        msg.innerText="Ivalid credential ";
    }
}