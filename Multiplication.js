function Generator1(){
    const num=Number(document.getElementById("num").value);
    const output = document.getElementById("msg");
    let result = "";
    let i = 1;
    for (i ;i<=10; i++){
        result+=`${num} x ${i}=${num*i}\n`;
    }
    output.innerText=result;


}