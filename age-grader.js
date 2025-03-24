function grader(){
    const age=Number(document.getElementById("age").value);
    const output=document.getElementById("output");

    if (age<=0 || isNaN(age)){
        output.innerText="please anter a valid age";
        return;
    }

    if (age<=18){
        output.innerText="You are Minor";
    }else if (age<=60){
        output.innerText="You are adult";
    }else{
        output.innerText="You are senior";
    }
}