function checknumber(){
    const input=document.getElementById("numInput").value;
    const number=Number(input)

    if (number%2==0){
        document.getElementById("result").innerText=number+" is Even";
    }else{
        document.getElementById("result").innerText=number+" is Odd";
    }

}