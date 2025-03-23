function greetUser(){
    let username= document.getElementById("nameInput").value;

    if (username.trim() !==""){
        alert("Hello " +username+ " wellcome to full stack development course");
    }   else{
        alert("please enter your name")
    }
}