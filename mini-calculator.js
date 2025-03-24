function calculator(){
    const input1 =document.getElementById("num1").value;
    const input2 =document.getElementById("num2").value;
    const result=document.getElementById("result");
    const a=Number(input1);
    const b=Number(input2);

    const sum =a+b;
    const differ =a-b;
    const multiply =a*b;
    const divide = b!==0 ?(a/b).toFixed(2):a+" cannot be divided by zero";

    result.innerText= 
    `sum : ${sum}\n`+
    `Differ: ${differ}\n`+
    `Multiply: ${multiply}\n`+
    `Divide: ${divide}\n`;


}