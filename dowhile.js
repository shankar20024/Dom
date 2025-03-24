function printDoWhile(){
    const n = Number(document.getElementById("num").value);
    const output=document.getElementById("output");
    let i = 1;
    let result="";


    do{
        result+=i+ "\n";
        i++;
    }while(i<=n)
    output.innerText=result;
}