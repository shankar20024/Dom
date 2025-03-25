const getfullname=(first,last)=>`${first} ${last}`;
const fng=()=>{
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const fulname= getfullname(fname,lname)
    document.getElementById("output").innerText=`Welcome: ${fulname}`;
}