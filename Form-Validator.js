function form1(){
    const email=document.getElementById("email").value.trim();
    const name=document.getElementById("name").value.trim();
    const msg = document.getElementById("msg");

    if(email===""|| name===""){
        msg.innerText="Enter Valid Email/Name";
    }else {
        msg.innerText=`Wellcome ${name} your form has been submited succesfully`;
    }
}