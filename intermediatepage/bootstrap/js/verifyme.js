// JavaScript source code
function myverification() {

    var theanswer = document.getElementById("verifyanswer").value;
    if (theanswer == "your name") {
        window.alert("Welcome to my real me.");

        window.location = ".././././v2secret.html";
    }
    else if(theanswer=="showmetheanswer"){
            window.alert("take it");
            document.getElementById('theverificationanswer').style.color="red";

    }
    else {
        window.location = ".././././v2offic.html";
        window.alert("Sorry. Wrong answer.");
    }
}
