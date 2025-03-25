const ages=(age)=>{
    if (age<=0 || isNaN(age)){
       return "please anter a valid age";
    }else if (age<=13){
        return "child";
    }else if (age<=20){
        return "teenager";
    }else if(age<=60){
        return "Adult";
    }else {
        return "Senior";
    }
}
function grader(){
    const age=Number(document.getElementById("age").value);
    const output=document.getElementById("output");
    const msg= ages(age);
    output.innerText=`you are ${msg}`;

}