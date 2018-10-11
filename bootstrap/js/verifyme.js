// JavaScript source code
function myfunction() {

    var theanswer = document.getElementById("verifyanswer").value;
    if (theanswer == "your name") {
        window.alert("hi");

        window.location = "v2nosig.html";
    }
    else {
        window.location = "v2offic.html";
        window.alert("bye");
    }
}