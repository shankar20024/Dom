function calculateSum() {
    const n=Number(document.getElementById("num").value);
    let sum=0;
    let expresion="";

    for(i=1;i<=n;i++){
        sum+=i;
        expresion += (i==n)?`${i}`:`${i}+`;
        document.getElementById("output").innerText=`${expresion} = ${sum}`
    }
    }
  