
var Employe = JSON.parse(localStorage.getItem("Employeinfo")) || [];
document.getElementById("registrationbutton").addEventListener("click", function () {
    let email = document.getElementById("email1").value;
    let password = document.getElementById("password1").value;
    let fname = document.getElementById("fname1").value;
    let lname = document.getElementById("lname1").value;
    let code = document.getElementById("code1").value;
    let mobile = document.getElementById("digits").value;
    // console.log(email, password, fname, lname, code, mobile )

    let obj = {
        email,
        password,
        fname,
        lname,
        code,
        mobile
    };
    Employe.push(obj);
    alert("Successful Singed Up")
    window.location.href = ""


    localStorage.setItem("Employeinfo", JSON.stringify(Employe));
    console.log(Employe);
})
