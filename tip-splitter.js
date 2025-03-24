function split(){
    const bill = Number(document.getElementById("amount").value);
    const tip = Number(document.getElementById("tip").value);
    const output=document.getElementById("output");

    if(bill<=0 || tip<=0){
        output.innerText="Please Enter valid amount or tip percentage";
        return;
    }
    const tipamount=(bill*tip)/100;
    const billamount=bill+tipamount;

    output.innerHTML=
    `Total Bill Amount (Bill + Tip) : ${billamount.toFixed(2)} <br>`+
    `Total Tip :  ${tipamount.toFixed(2)} <br>`;
}